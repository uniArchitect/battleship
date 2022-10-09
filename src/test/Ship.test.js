/* eslint-disable no-undef */
const Ship = require("../Ship");

test("Ship class creates a new object", () => {
  expect(new Ship(4, "Battleship")).toEqual({
    name: "Battleship",
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 0,
    isAlive: true,
  });
});

test("Ship is hit in the first position", () => {
  expect(Ship.hit(1, [1, 1, 1, 1])).toEqual(["x", 1, 1, 1]);
});

test("Ship hitCount increases", () => {
  let testShip = {
    name: "Battleship",
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 0,
    isAlive: true,
  };
  expect(Ship.hitCount(testShip)).toEqual({
    name: "Battleship",
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 1,
    isAlive: true,
  });
});

test("Ship is sunk", () => {
  let testShip = {
    name: "Battleship",
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 4,
    isAlive: true,
  };
  expect(Ship.checkSunk(testShip)).toEqual({
    name: "Battleship",
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 4,
    isAlive: false,
  });
});
