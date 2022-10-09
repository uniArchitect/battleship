/* eslint-disable no-undef */
class Ship {
  constructor(length, name) {
    this.name = name;
    this.length = length;
    // isHit countdown array from value given in length - ex. length = 4, isHit = [1,1,1,1]
    // let shipLife = [...Array(length)].map((i) => i = 1);
    // this.hitSquares = shipLife;

    this.hitSquares = [...Array(length).keys()].map((i) => i + 1);
    this.hitCount = 0;
    this.isAlive = true;
  }

  // Be able to count number of hits
  static hitCount(ship) {
    ship.hitCount = ship.hitCount + 1;
    return ship;
  }

  static checkSunk(ship) {
    if (ship.hitCount == ship.length) {
      ship.isAlive = false;
      return ship;
    } else return;
  }
}
module.exports = Ship;
