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
    const ship = new Ship(shipLength, 'Battleship');
    const editBoard = Gameboard.board;

    // call ship.hitSquares (ex. [1,2,3,4,5])
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

    return { editBoard, ship };
  }

  // Event - Receive attacks
  static receiveAttack = (xCoord, yCoord, placeShip) => {
    const hitMarker = placeShip.editBoard[xCoord][yCoord];

    if (hitMarker <= '5' && hitMarker != 0) {
      let shipIndex = hitMarker;
      placeShip.editBoard[xCoord][yCoord] = 'x';

      // Event - Ship.hit(index, hitSquares) will replace value of placeShip.ship.hitSquares
      placeShip.ship.hitSquares = Ship.hit(shipIndex, placeShip.ship.hitSquares);

      // return 'hit!';
      return placeShip;
    } else {
      // Event - Track misses
      placeShip.editBoard[xCoord][yCoord] = 'm';
      // return 'miss!';
      return placeShip;
    }
  }

  // Event - Report end of game
  static checkEndGame = (ship) => {
    if (ship.isAlive == false) {
      return 'End Game';
    } else return;
  }
}

module.exports = Gameboard;
