/* eslint-disable no-undef */
import Ship from "./Ship";

class Gameboard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    let board = [];

    // Create empty two dimensional array based on how many inputs are in place
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
  static placeShip = (orientation, xCoord, yCoord, shipLength, Gameboard) => {
    const ship = new Ship(shipLength);
    const editBoard = Gameboard.board;

    // call ship.hitSquares (ex. [1,1,1,1,1])
    // xCoord determines row to place ship
    if (orientation == 'horizontal') {
      for (let i = 0; i < ship.hitSquares.length; i++) {
        editBoard[xCoord][yCoord + i] = ship.hitSquares[i];
      }  
    // yCoord determines column to place ship
    } else if (orientation == 'vertical') {
      for (let i = 0; i < ship.hitSquares.length; i++) {
        editBoard[xCoord + i][yCoord] = ship.hitSquares[i];
      }  
    }

    return editBoard;
  }

  // Event - Receive attacks
  static receiveAttack = (xCoord, yCoord, placeShip) => {
    if (placeShip[xCoord][yCoord] == '1') {
      return 'hit!';
    } else return 'miss!';
  }

  // Event - Track misses

  // Event - Report end of game
}

module.exports = Gameboard;
