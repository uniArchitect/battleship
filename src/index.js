import _ from "lodash";
import "./styles.css";
import Ship from "./Ship";
import Gameboard from "./Gameboard";
import Player from "./Player";

const playerContainer = document.querySelector(".Player-1-Container");
const computerContainer = document.querySelector(".Player-2-Container");

// Battleship UI Set Up
// In progress function to create battleship gameboard
const gameBoard = new Gameboard(10, 10);
const playerBoard = document.createElement("div");
playerContainer.appendChild(playerBoard).className = "player-board";
const computerBoard = document.createElement("div");
computerContainer.appendChild(computerBoard).className = "computer-board";

const createBoard = (board, rows, cols) => {
  board.style.setProperty("--grid-rows", rows);
  board.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = 0;
      let playerSquare = document.createElement("div");
      playerSquare.setAttribute("id", `${i},${j}`);
      board.appendChild(playerSquare).className = "board-square";
    }
  }
};

createBoard(playerBoard, gameBoard.rows, gameBoard.cols);
createBoard(computerBoard, gameBoard.rows, gameBoard.cols);

const boardSquare = document.querySelectorAll(".board-square");

// Assign Player ship coordinates - Draft function
const assignShip = (e) => {
    // X Coordinate - Convert to Number
    let x = Number(e.target.id[0]);
    // Y Coordinate - Convert to Number
    let y = Number(e.target.id[2]);
    console.log(y);
    // Need external input for ship length argument
    // Need external input for vertical and horizontal argument
    Gameboard.placeShip("horizontal", x, y, 5, gameBoard);
    console.log(gameBoard);
}

boardSquare.forEach((boardSquare) => {
    boardSquare.addEventListener("click", assignShip);
  });

// Render Battleship Attack on Click
// Mark each board square
const changeCoordinate = (element, marker) => {
  element.setAttribute("id", `${marker}`);
  element.appendChild(marker);
};

const attackCoordinate = (e) => {
  console.log(e.target);

  // Define miss marker
  const miss = document.createElement("div");
  miss.classList.add("miss");
  miss.innerHTML = `
    <svg style="width:1.75em;height:1.75em" viewBox="0 0 24 24">
        <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
    `;

  // Define hit marker
  const hit = document.createElement("div");
  hit.classList.add("circle");
  hit.innerHTML = `
    <svg style="width:1.75em;height:1.75em" viewBox="0 0 24 24">
        <path fill="white" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
    </svg>
    `;

  // Change game square
  // Incorporate if statement to determine if hit or miss will be used based on secondary class (assigned ship coordinates) of the board square
  changeCoordinate(e.target, miss);
};

// Add event listener for each board square
boardSquare.forEach((boardSquare) => {
  boardSquare.addEventListener("click", attackCoordinate, { once: true });
});
