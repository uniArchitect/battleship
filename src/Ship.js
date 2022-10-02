/* eslint-disable no-undef */
class Ship {
  constructor(length, name) {
    this.name = name;    
    this.length = length;
    // isHit countdown array from value given in length - ex. length = 4, isHit = [1,1,1,1]
    // let shipLife = [...Array(length)].map((i) => i = 1);
    // this.hitSquares = shipLife;

    this.hitSquares = [...Array(length).keys()].map((i) => i + 1);
    this.isAlive = true;
  }

  // Takes a number, object.hitSquares and marks that hitSquare as 'hit'
  static hit(index, hitSquares) {
    // hitSquares is an array that represents length of each ship - Goal: [1,1,1,1] toBe [x,1,1,1]
    // hitSquares.splice() - replace num(index) with 'x'
    hitSquares.splice((index-1), 1, "x");

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
