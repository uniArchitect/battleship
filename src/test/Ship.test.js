/* eslint-disable no-undef */
const Ship = require("../Ship");

test("Ship class creates a new object", () => {
  expect(new Ship(4, 'Battleship')).toEqual({
    name: 'Battleship',
    length: 4,
    hitSquares: [1, 2, 3, 4],
    isAlive: true,
  });
});

// test("Ship is hit in the first position", () => {
//   expect(Ship.hit(1, [1, 1, 1, 1])).toEqual(["x", 1, 1, 1]);
// });

// test("Ship is hit in the second position", () => {
//   expect(Ship.hit(2, [1, 1, 1, 1])).toEqual([1, "x", 1, 1]);
// });

// test("Ship is hit in the third position", () => {
//   expect(Ship.hit(3, [1, 1, 1, 1])).toEqual([1, 1, "x", 1]);
// });

// test("Ship is hit in the fourth position", () => {
//   expect(Ship.hit(4, [1, 1, 1, 1])).toEqual([1, 1, 1, "x"]);
// });

// test("Ship is hit four times", () => {
//   expect(Ship.hit(4, ["x", "x", "x", 1])).toEqual(["x", "x", "x", "x"]);
// });

test("Ship is sunk", () => {
  expect(Ship.checkSunk(["x", "x", "x", "x"])).toEqual(true);
});
