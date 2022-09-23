/* eslint-disable no-undef */
class Ship {
  constructor(length) {
    this.length = length;
    // isHit countdown array from value given in length - ex. length = 4, isHit = [1,2,3,4]
    this.hitSquares = [...Array(length).keys()].map((i) => i + 1);
    this.isAlive = true;
  }

  // Takes a number, object.hitSquares and marks that hitSquare as 'hit'
  // Test hit to be hit multiple times
  static hit(num, hitSquares) {
    // hitLocation is an array that represents length of each ship - Goal: [1,2,3,4] toBe [x,2,3,4]
    let index = hitSquares.findIndex((spot) => spot === num);
    // hitLocation.splice() - index[0] with 'x'
    hitSquares.splice(index, 1, "x");

    return hitSquares;
  }

  // Checks based on object.hitSquares and whether all positions are 'hit' ('x')
  static checkSunk(hitSquares) {
    // if isHit of object is filled, return isAlive as false
    const isSunk = hitSquares.every((element) => {
      if (element === "x") {
        return true;
      }
    });

    return isSunk;
  }
}
module.exports = Ship;