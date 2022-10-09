/* eslint-disable no-undef */
import Ship from "./Ship";

class Gameboard {
  constructor(rows, cols) {
    // 4 properties
    this.rows = rows;
    this.cols = cols;

    let board = [];
    let shipArray = [];

    // Create empty two dimensional array based on how many inputs are in place
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < cols; j++) {
        board[i][j] = 0;
      }
    }

    this.board = board;
    this.ships = shipArray;
  }

  // Event - Place ships (object from Ship.js)
  // Arguments needed to determine where to place coordinates
  static placeShip = (orientation, xCoord, yCoord, shipLength, Gameboard) => {
    const board = Gameboard.board;
    const ship = new Ship(shipLength, "Battleship");

    // call ship.hitSquares (ex. [1,2,3,4,5])
    // xCoord determines row to place ship
    if (orientation == "horizontal") {
      for (let i = 0; i < ship.hitSquares.length; i++) {
        board[xCoord][yCoord + i] = ship.hitSquares[i];
      }
      // yCoord determines column to place ship
    } else if (orientation == "vertical") {
      for (let i = 0; i < ship.hitSquares.length; i++) {
        board[xCoord + i][yCoord] = ship.hitSquares[i];
      }
    }

    // Add ship object to Gameboard
    // ship should be added as a new ship each type
    // gameboardLength is 4 by default
    let gameboardLength = Object.keys(Gameboard.ships).length;
    for (let s = gameboardLength; s < gameboardLength + 1; s++) {
      Gameboard.ships[s] = ship;
    }

    return Gameboard;
  };

  // Event - Receive attacks
  static receiveAttack = (xCoord, yCoord, Gameboard) => {
    const hitMarker = Gameboard.board[xCoord][yCoord];

    if (hitMarker <= "5" && hitMarker != 0) {
      let shipIndex = hitMarker;
      // Event - Marks the board, replacing a 0 with an 'x'
      Gameboard.board[xCoord][yCoord] = "x";

      // Event - Ship.hit(index, hitSquares) will replace value of Gameboard.ships[].hitSquares
      // Figure out how to choose the specific ship within the array - '0' has to be the ship called
      Gameboard.ships[0].hitSquares = Ship.hit(
        shipIndex,
        Gameboard.ships[0].hitSquares
      );

      // Event - Check to see if ship is sunk, change isAlive property if sunk
      if (Ship.checkSunk(Gameboard.ships[0].hitSquares)) {
        Gameboard.ships[0].isAlive = false;
      }
      return Gameboard;
      // return 'hit!';
    } else {
      // Event - Track misses
      Gameboard.board[xCoord][yCoord] = "m";
      // return 'miss!';
      return Gameboard;
    }
  };

  // Event - Report end of game
  static checkEndGame = (ship) => {
    if (ship.isAlive == false) {
      return "End Game";
    } else return;
  };
}

module.exports = Gameboard;
