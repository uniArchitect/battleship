/* eslint-disable no-undef */
const Gameboard = require("../Gameboard");
const Ship = require("../Ship");

test.skip("Gameboard test empty array", () => {
  expect(new Gameboard(10, 10)).toEqual({
    rows: 10,
    cols: 10,
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test("Gameboard calls 1 Ship class constructor horizontally", () => {
  let testBoard = {
    rows: 5,
    cols: 5,
    board: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    ships: [],
  };
  expect(Gameboard.placeShip("horizontal", 1, 1, 3, testBoard)).toEqual({
    rows: 5,
    cols: 5,
    board: [
      [0, 0, 0, 0, 0],
      [0, 1, 2, 3, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    ships: [
      {
        hitSquares: [1, 2, 3],
        hitCount: 0,
        isAlive: true,
        length: 3,
        position: [
            [1,1],
            [1,2],
            [1,3],
        ],
      },
    ],
  });
});

test("Gameboard calls 1 Ship class constructor vertically", () => {
    let testBoard = {
      rows: 5,
      cols: 5,
      board: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      ships: [],
    };
    expect(Gameboard.placeShip("vertical", 1, 1, 3, testBoard)).toEqual({
      rows: 5,
      cols: 5,
      board: [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 2, 0, 0, 0],
        [0, 3, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      ships: [
        {
          hitSquares: [1, 2, 3],
          hitCount: 0,
          isAlive: true,
          length: 3,
          position: [
              [1,1],
              [2,1],
              [3,1],
          ],
        },
      ],
    });
  });

test.skip("Gameboard calls 4 Ship class constructors", () => {
  const testBoard = {
    rows: 5,
    cols: 5,
    board: [
      [1, 0, 0, 0, 0],
      [2, 1, 2, 3, 0],
      [3, 0, 0, 0, 0],
      [4, 0, 1, 2, 3],
      [0, 0, 0, 0, 0],
    ],
    ships: [
      {
        hitSquares: [1, 2, 3],
        isAlive: true,
        length: 3,
      },
      {
        hitSquares: [1, 2, 3, 4],
        isAlive: true,
        length: 4,
      },
      {
        hitSquares: [1, 2, 3],
        isAlive: true,
        length: 3,
      },
    ],
  };
  expect(Gameboard.placeShip("horizontal", 4, 0, 5, testBoard)).toEqual({
    rows: 5,
    cols: 5,
    board: [
      [1, 0, 0, 0, 0],
      [2, 1, 2, 3, 0],
      [3, 0, 0, 0, 0],
      [4, 0, 1, 2, 3],
      [1, 2, 3, 4, 5],
    ],
    ships: [
      {
        hitSquares: [1, 2, 3],
        hitCount: 0,
        isAlive: true,
        length: 3,
      },
      {
        hitSquares: [1, 2, 3, 4],
        hitCount: 0,
        isAlive: true,
        length: 4,
      },
      {
        hitSquares: [1, 2, 3],
        hitCount: 0,
        isAlive: true,
        length: 3,
      },
      {
        hitSquares: [1, 2, 3, 4, 5],
        hitCount: 0,
        isAlive: true,
        length: 5,
      },
    ],
  });
});

test("Ship receives an attack and declares hit", () => {
  let testBoard = {
    rows: 5,
    cols: 5,
    board: [
      [0, 0, 0, 0, 0],
      [0, 1, 2, 3, 0],
      [1, 0, 0, 0, 0],
      [2, 0, 0, 0, 0],
      [3, 0, 0, 0, 0],
    ],
    ships: [
      {
        hitSquares: [1, 2, 3],
        hitCount: 0,
        isAlive: true,
        length: 3,
        position: [
            [1,1],
            [1,2],
            [1,3],
        ],
      },
      {
        hitSquares: [1, 2, 3],
        hitCount: 0,
        isAlive: true,
        length: 3,
        position: [
            [2,0],
            [3,0],
            [4,0],
        ],
      },
    ],
  };
  expect(
    Gameboard.receiveAttack(
      2,
      0,
      testBoard
    )
  ).toEqual({
    rows: 5,
    cols: 5,
    board: [
      [0, 0, 0, 0, 0],
      [0, 1, 2, 3, 0],
      ["x", 0, 0, 0, 0],
      [2, 0, 0, 0, 0],
      [3, 0, 0, 0, 0],
    ],
    ships: [
      {
        hitSquares: [1, 2, 3],
        hitCount: 0,
        isAlive: true,
        length: 3,
        position: [
            [1,1],
            [1,2],
            [1,3],
        ],
      },
      {
        hitSquares: [1, 2, 3],
        hitCount: 1,
        isAlive: true,
        length: 3,
        position: [
            [2,0],
            [3,0],
            [4,0],
        ],
      },
    ],
  });
});

test.skip("Ship receives an attack and declares hit", () => {
    let testBoard = {
      rows: 5,
      cols: 5,
      board: [
        [0, 0, 0, 0, 0],
        [0, 1, "x", 3, 0],
        [1, 0, 0, 0, 0],
        [2, 0, 0, 0, 0],
        [3, 0, 0, 0, 0],
      ],
      ships: [
        {
          hitSquares: [1, 2, 3],
          hitCount: 1,
          isAlive: true,
          length: 3,
          position: [
              [1,1],
              [1,2],
              [1,3],
          ],
        },
        {
            hitSquares: [1, 2, 3],
            hitCount: 0,
            isAlive: true,
            length: 3,
            position: [
                [2,0],
                [3,0],
                [4,0],
            ],
        },
      ],
    };
    expect(
      Gameboard.receiveAttack(
        3,
        0,
        testBoard
      )
    ).toEqual({
      rows: 5,
      cols: 5,
      board: [
        [0, 0, 0, 0, 0],
        [0, 1, "x", 3, 0],
        [1, 0, 0, 0, 0],
        ["x", 0, 0, 0, 0],
        [3, 0, 0, 0, 0],
      ],
      ships: [
        {
          hitSquares: [1, 2, 3],
          hitCount: 1,
          isAlive: true,
          length: 3,
          position: [
              [1,1],
              [1,2],
              [1,3],
          ],
        },
        {
            hitSquares: [1, 2, 3],
            hitCount: 1,
            isAlive: true,
            length: 3,
            position: [
                [1,1],
                [1,2],
                [1,3],
            ],
        },
      ],
    });
  });

// test("Ship receives an attack and declares ship is sunk", () => {
//     expect(Gameboard.checkEndGame(ship))
//         .toBe('End Game');
// });

test("Ship receives an attack and declares miss", () => {
  let testBoard = {
    rows: 5,
    cols: 5,
    board: [
      [0, 0, 0, 0, 0],
      [0, 1, 2, 3, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    ships: [
        {
          name: "Battleship",
          hitSquares: [1, 2, 3],
          hitCount: 0,
          isAlive: true,
          length: 3,
        },
    ]
  };
  expect(
    Gameboard.receiveAttack(
      0,
      0,
      testBoard
    )
  ).toEqual({
    rows: 5,
    cols: 5,
    board: [
      ["m", 0, 0, 0, 0],
      [0, 1, 2, 3, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    ships: [
        {
          name: "Battleship",
          hitSquares: [1, 2, 3],
          hitCount: 0,
          isAlive: true,
          length: 3,
        },
    ],
  });
});
