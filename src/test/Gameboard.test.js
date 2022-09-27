/* eslint-disable no-undef */
const Gameboard = require("../Gameboard");

test("Gameboard test empty array", () => {
    expect(new Gameboard(10,10)).toEqual({
        rows: 10,
        cols: 10,
        board: [
            [0,0,0,0,0,0,0,0,0,0], 
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0], 
        ]
    })
})

test("Gameboard call Ship class constructor", () => {
    expect(Gameboard.placeShip(5)).toEqual({
      length: 5,
      hitSquares: [1, 2, 3, 4, 5],
      isAlive: true,
    });
  });