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
    const ship = new Ship(shipLength);

    // call ship.hitSquares (ex. [1,2,3,4,5])
    // xCoord determines row to place ship
    if (orientation == "horizontal") {
      for (let i = 0; i < ship.hitSquares.length; i++) {
        ship.position[i] = [xCoord, yCoord + i];
        board[xCoord][yCoord + i] = ship.hitSquares[i];
      }
      // yCoord determines column to place ship
    } else if (orientation == "vertical") {
      for (let i = 0; i < ship.hitSquares.length; i++) {
        ship.position[i] = [xCoord + i, yCoord];
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
      // let shipIndex = hitMarker;

      // Event - Marks the board, replacing a 0 with an 'x'
      Gameboard.board[xCoord][yCoord] = "x";

      // Event - Ship.hit(index, hitSquares) will replace value of Gameboard.ships[].hitSquares
      // Check which ship.position.includes( [xCoord, yCoord] )
      // Need to be able to use for loop to cycle through 2d array to find the matching [xCoord, yCoord]

      // Gameboard.ships.length = '1'
      for (let i = 0; i <= Gameboard.ships.length; i++) {
        // Gameboard.ships[i].position.length = '3' or the length of a ship in "shipArray"
        for (let j = 0; j <= Gameboard.ships[i].position.length; j++) {
          if (
            JSON.stringify(Gameboard.ships[i].position[j]) ==
            JSON.stringify([xCoord, yCoord])
          ) {
            console.log("It works!");
            Ship.hitCount(Gameboard.ships[i]);
            Ship.checkSunk(Gameboard.ships[i]);
            return Gameboard;
          }
        }
      }

      // Event - Check to see if ship is sunk, change isAlive property if sunk
      // if (Ship.checkSunk(Gameboard.ships[0])) {
      //   Gameboard.ships[0].isAlive = false;
      // }
      // return Gameboard;
      // return 'hit!';
    } else {
      // Event - Track misses
      Gameboard.board[xCoord][yCoord] = "m";
      // return 'miss!';
      return Gameboard;
    }
  };

  // Event - Report end of game
  // testBoard.ships.forEach((item) => Gameboard.checkEndGame(item))
  static checkEndGame = (shipsArray) => {
    if (shipsArray[0].isAlive == false && shipsArray[1].isAlive == false) {
      console.log("End Game");
      return "End Game";
    }
  };
}

module.exports = Gameboard;
