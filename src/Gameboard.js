/* eslint-disable no-undef */
import Ship from "./Ship";

class Gameboard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    let board = [];

    // Create empty two dimensional array based on how many inputs are in place
    // Make a for loop that will determine the amount of inputs in progression , rows * cols = board[i]
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for(let j = 0; j < cols; j++) {
            board[i][j] = 0;
        }
    }
    
    this.board = board;
  }

  // Event - Place ships (object from Ship.js)
  // Arguments needed to determine where to place coordinates
  static placeShip = (xCoord, shipLength, Gameboard) => {
    const ship = new Ship(shipLength);
    const editBoard = Gameboard.board;
    // call ship.hitSquares (ex. [1,1,1,1,1])
    // editBoard.splice(1, 0, ship.hitSquares);

    for (let i = 0; i < ship.hitSquares.length; i++) {
      editBoard[xCoord][i] = ship.hitSquares[i];
    }

    return editBoard;
  }

  // Event - Receive attacks

  // Event - Track misses

  // Event - Report end of game
}

module.exports = Gameboard;
