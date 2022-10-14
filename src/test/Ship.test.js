/* eslint-disable no-undef */
const Ship = require("../Ship");

test("Ship class creates a new object", () => {
  expect(new Ship(4, "Battleship")).toEqual({
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 0,
    isAlive: true,
    position: [],
  });
});

test.skip("Ship hitCount increases", () => {
  let testShip = {
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 0,
    isAlive: true,
    position: [],
  };
  expect(Ship.hitCount(testShip)).toEqual({
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 1,
    isAlive: true,
    position: [],
  });
});

test.skip("Ship is sunk", () => {
  let testShip = {
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 4,
    isAlive: true,
    position: [],
  };
  expect(Ship.checkSunk(testShip)).toEqual({
    length: 4,
    hitSquares: [1, 2, 3, 4],
    hitCount: 4,
    isAlive: false,
    position: [],
  });
});
