/* eslint-disable no-undef */
const Gameboard = require("../Gameboard");

test("Gameboard test empty array", () => {
    expect(new Gameboard(2,2)).toEqual({
        rows: 2,
        cols: 2,
        board: [[], [], [], []]
    })
})

test("Gameboard call Ship class constructor", () => {
    expect(Gameboard.placeShip(5)).toEqual({
      length: 5,
      hitSquares: [1, 2, 3, 4, 5],
      isAlive: true,
    });
  });