/* eslint-disable no-undef */
import Ship from "./Ship";

class Gameboard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    let board = [];

    // Create empty two dimensional array
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board[i] = [];
        }
    }

    for (let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            board[i][j] = j;
        }
    }

    return board;

    // program to create a two dimensional array
    // function twoDimensionArray(a, b) {
    //     let arr = [];

    //     // creating two dimensional array
    //     for (let i = 0; i< a; i++) {
    //         for(let j = 0; j< b; j++) {
    //             arr[i] = [];
    //         }
    //     }

    //     // inserting elements to array
    //     for (let i = 0; i< a; i++) {
    //         for(let j = 0; j< b; j++) {
    //             arr[i][j] = j;
    //         }
    //     }
    //     return arr;
    // }

    // const x = 2;
    // const y = 3;
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
