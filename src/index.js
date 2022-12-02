import _ from "lodash";
import "./styles.css";
import Ship from "./Ship";
import Gameboard from "./Gameboard";
import Player from "./Player";

const playerContainer = document.querySelector(".Player-1-Container");

// In progress function to create battleship gameboard
const gameBoard = new Gameboard(10, 10);

const playerBoard = document.createElement("div");
playerContainer.appendChild(playerBoard).className = "player-board";

const createBoard = (rows, cols) => {
  playerBoard.style.setProperty("--grid-rows", rows);
  playerBoard.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let playerSquare = document.createElement("div");
    playerSquare.setAttribute("id", "player-square");
    playerBoard.appendChild(playerSquare).className = "player-square";
  }
};
createBoard(gameBoard.rows, gameBoard.cols);
