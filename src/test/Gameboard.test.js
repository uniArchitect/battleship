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
    expect(Gameboard.placeShip('horizontal', 1, 1, 3, new Gameboard(5,5))).toEqual([
            [0,0,0,0,0],
            [0,1,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
        ]
    );
  });

test("Gameboard call Ship class constructor", () => {
expect(Gameboard.placeShip('vertical', 1, 2, 5, new Gameboard(10,10))).toEqual([
            [0,0,0,0,0,0,0,0,0,0], 
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0], 
        ]
    );
});

test("Ship receives an attack and declares hits", () => {
    expect(Gameboard.receiveAttack(1, 1, Gameboard.placeShip('horizontal', 1, 1, 3, new Gameboard(5,5)))).toBe('hit!');
});

test("Ship receives an attack and declares hit or miss", () => {
    expect(Gameboard.receiveAttack(0, 0, Gameboard.placeShip('horizontal', 1, 1, 3, new Gameboard(5,5)))).toBe('miss!');
});