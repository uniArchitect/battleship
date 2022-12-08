import _ from "lodash";
import "./styles.css";
import Ship from "./Ship";
import Gameboard from "./Gameboard";
import Player from "./Player";

const playerContainer = document.querySelector(".Player-Container");
const computerContainer = document.querySelector(".Computer-Container");

// Battleship UI Set Up
// In progress function to create battleship gameboard
const gameBoard = new Gameboard(10, 10);
const computerGameBoard = new Gameboard(10, 10);

const playerBoard = document.createElement("div");
playerContainer.appendChild(playerBoard).className = "player";
const computerBoard = document.createElement("div");
computerContainer.appendChild(computerBoard).className = "computer";

const createBoard = (board, rows, cols) => {
  board.style.setProperty("--grid-rows", rows);
  board.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = 0;
      let playerSquare = document.createElement("div");
      playerSquare.setAttribute("id", `${board.className}-[${i},${j}]`);
      board.appendChild(playerSquare).className = `${board.className}-square`;
    }
  }

  return board;
};

createBoard(playerBoard, gameBoard.rows, gameBoard.cols);
createBoard(computerBoard, computerGameBoard.rows, computerGameBoard.cols);

const boardSquare = document.querySelectorAll(".computer-square");

// Assign Player ship coordinates - Draft function
const draftPlayerAssignShip = (board) => {
    Gameboard.placeShip("horizontal", 3, 2, 5, board);
    Gameboard.placeShip("vertical", 1, 8, 4, board);
    Gameboard.placeShip("horizontal", 6, 3, 3, board);
    Gameboard.placeShip("horizontal", 8, 3, 3, board);
    Gameboard.placeShip("vertical", 5, 1, 2, board);    

    console.log(board);
    console.log(board.ships[0].position[0]);
    console.log(`[${board.ships[0].position[0]}]`);

    return board;
};
const draftComputerAssignShip = (board) => {
  Gameboard.placeShip("horizontal", 2, 1, 5, board);
  Gameboard.placeShip("vertical", 0, 7, 4, board);
  Gameboard.placeShip("horizontal", 5, 4, 3, board);
  Gameboard.placeShip("horizontal", 7, 4, 3, board);
  Gameboard.placeShip("vertical", 4, 0, 2, board);    

  console.log(board);
  console.log(board.ships[0].position[0]);
  console.log(`[${board.ships[0].position[0]}]`);

  return board;
};

draftPlayerAssignShip(gameBoard);
draftComputerAssignShip(computerGameBoard);

const assignShip = (e) => {
    // X Coordinate - Convert to Number
    let x = Number(e.target.id[1]);
    // Y Coordinate - Convert to Number
    let y = Number(e.target.id[3]);
    // Need external input for ship length argument
    // Need external input for vertical and horizontal argument
    Gameboard.placeShip("horizontal", x, y, 5, gameBoard);
    console.log(gameBoard);
};

// boardSquare.forEach((boardSquare) => {
//     boardSquare.addEventListener("click", assignShip);
//   });

// Render Battleship positions
const renderShips = (board, playerBoard) => {
  // Set up template to select each ship position - Set up for loop to cycle through all ships and ships positions
  for (let i = 0; i < board.ships.length; i++) {
    for (let j = 0; j < board.ships[i].position.length; j++) {
      let occupiedSquare = document.getElementById(`${playerBoard.className}-[${board.ships[i].position[j]}]`)
        // Find ship coordinates in 'player-board-square' and highlights the coordinates
      if (occupiedSquare.className == 'player-square') {
          occupiedSquare.style.background = '#E23E57';  
        } else if (occupiedSquare.className == 'computer-square') {
          occupiedSquare.classList.add('occupied-target');
        }   
        // Find ship coordinates in 'computer-board-square' and highlights the coordinates
        // Create unique ID or Class for player and computer grids
        // Computer grid does not need to highlight enemy ships UNTIL they are hit
        // else if (occupiedSquare.className == 'computer-square') {
        //   occupiedSquare.style.background = '#E23E57';
        // }     
    }
  }
}

renderShips(gameBoard, playerBoard);
renderShips(computerGameBoard, computerBoard);

// Render Battleship Attack on Click
// Mark each board square
// const changeCoordinate = (element, marker) => {
//   element.setAttribute("id", `${marker}`);
//   element.appendChild(marker);
// };

// Incorporate Gameboard.receiveAttack() function
const attackCoordinate = (e) => {
  console.log(e.target);

  // 12072022 - splice e.target X and Y coordinates to input into Gameboard.receiveAttack
  // Gameboard.receiveAttack(e.target, e.target, computerBoard);

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
  if (e.target.classList.contains('occupied-target')) {
    e.target.appendChild(hit);
  } else {
    e.target.appendChild(miss);
  };
};

// Add event listener for each board square
boardSquare.forEach((boardSquare) => {
  boardSquare.addEventListener("click", attackCoordinate, { once: true });
});
