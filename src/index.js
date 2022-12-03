import _ from "lodash";
import "./styles.css";
import Ship from "./Ship";
import Gameboard from "./Gameboard";
import Player from "./Player";

const playerContainer = document.querySelector(".Player-1-Container");
const computerContainer = document.querySelector(".Player-2-Container");

// In progress function to create battleship gameboard
const gameBoard = new Gameboard(10, 10);

const playerBoard = document.createElement("div");
playerContainer.appendChild(playerBoard).className = "player-board";
const computerBoard = document.createElement("div");
computerContainer.appendChild(computerBoard).className = "computer-board";

const createBoard = (board, rows, cols) => {
    board.style.setProperty("--grid-rows", rows);
    board.style.setProperty("--grid-cols", cols);
  
    // Create new for loop using Gameboard class
    // First row is first array, second row is second array, etc.
    for (let i = 0; i < rows; i++) {
        // i = 10 rows
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            // j = 10 columns
          board[i][j] = 0;
            let playerSquare = document.createElement("div");
            playerSquare.setAttribute("id", `${i},${j}`);
            board.appendChild(playerSquare).className = "board-square";   
        }
      }

//     for (let i = 0; i < rows * cols; i++) {
//     let playerSquare = document.createElement("div");
//     playerSquare.setAttribute("id", "board-square");
//     board.appendChild(playerSquare).className = "board-square";
//   }
};

createBoard(playerBoard, gameBoard.rows, gameBoard.cols);
createBoard(computerBoard, gameBoard.rows, gameBoard.cols);
