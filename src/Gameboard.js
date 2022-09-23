/* eslint-disable no-undef */
import Ship from "./Ship";

class Gameboard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }

  // Event - Place ships (object from Ship.js)
  static placeShip = (shipLength) => {
    const ship = new Ship(shipLength);
    return ship;
  }

  // Event - Receive attacks

  // Event - Track misses

  // Event - Report end of game
}

module.exports = Gameboard;
