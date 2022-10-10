/* eslint-disable no-undef */
const Gameboard = require("../Gameboard");

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

test.skip("Gameboard calls 1 Ship class constructor", () => {
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
        name: "Battleship",
        hitSquares: [1, 2, 3],
        isAlive: true,
        length: 3,
      },
      {
        name: "Battleship",
        hitSquares: [1, 2, 3, 4],
        isAlive: true,
        length: 4,
      },
      {
        name: "Battleship",
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
        name: "Battleship",
        hitSquares: [1, 2, 3],
        isAlive: true,
        length: 3,
      },
      {
        name: "Battleship",
        hitSquares: [1, 2, 3, 4],
        isAlive: true,
        length: 4,
      },
      {
        name: "Battleship",
        hitSquares: [1, 2, 3],
        isAlive: true,
        length: 3,
      },
      {
        name: "Battleship",
        hitSquares: [1, 2, 3, 4, 5],
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
      },
    ],
  };
  expect(
    Gameboard.receiveAttack(
      1,
      2,
      testBoard
    )
  ).toEqual({
    rows: 5,
    cols: 5,
    board: [
      [0, 0, 0, 0, 0],
      [0, 1, "x", 3, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    ships: [
      {
        hitSquares: [1, 2, 3],
        hitCount: 1,
        isAlive: true,
        length: 3,
      },
    ],
  });
});

test.skip("Ship receives an attack and declares hit at 3rd position", () => {
  let testBoard = {
    rows: 5,
    cols: 5,
    board: [
      [0, 0, 0, 0, 0],
      [0, "x", "x", 3, 0],
      [1, 0, 0, 0, 0],
      [2, 0, 0, 0, 0],
      [3, 0, 0, 0, 0],
    ],
    ships: [
      {
        name: "Battleship",
        hitSquares: ["x", "x", 3],
        isAlive: true,
        length: 3,
      },
      {
        name: "Battleship",
        hitSquares: [1, 2, 3],
        isAlive: true,
        length: 3,
      },
    ],
  };
  expect(Gameboard.receiveAttack(2, 0, testBoard)).toEqual({
    rows: 5,
    cols: 5,
    board: [
      [0, 0, 0, 0, 0],
      [0, "x", "x", 3, 0],
      ["x", 0, 0, 0, 0],
      [2, 0, 0, 0, 0],
      [3, 0, 0, 0, 0],
    ],
    ships: [
      {
        name: "Battleship",
        hitSquares: ["x", "x", 3],
        isAlive: true,
        length: 3,
      },
      {
        name: "Battleship",
        hitSquares: ["x", 2, 3],
        isAlive: true,
        length: 3,
      },
    ],
  });
});

// test("Ship receives an attack and declares ship is sunk", () => {
//     expect(Gameboard.checkEndGame(ship))
//         .toBe('End Game');
// });

test.skip("Ship receives an attack and declares miss", () => {
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
