class Player {
  constructor(name) {
    this.name = name;
    this.turn = true;
  }

  static playerAttackMove = (x, y) => {
    return [x, y];
  };

  // function to generate random x,y coordinates
  // x,y arguments should be randomly generated to be input into computerPlace / computerAttack OR Gameboard class functions placeShip, and receiveAttack
  // Write in logic to not repeat a coordinate - in the future
  // attackMove will be output into Gameboard functions
  static computerAttackMove = () => {
    const x = Math.floor(Math.random() * 10) - 1;
    const y = Math.floor(Math.random() * 10) - 1;

    if (Gameboard.board[x][y] == "x") {
      return;
    } else return [x, y];
  };

  static swapTurns = (player) => {
    player.turn = !player.turn;
    return player.turn;
  };

  // Reference Tic Tac Toe for game turn logic
  static playerMove = (x, y, player) => {
    const playerTurn = player.turn ? true : false;

    if (playerTurn == true) {
      // find way to grab input to use as argument in attackMove
      let playerAttackCoord = Player.playerAttackMove(x, y);
      Player.swapTurns(player);

      // return { attackCoordinate: playerAttackCoord, playerTurn: testTurn }; -> playerTurn is only for testing
      // return playerAttackCoord may need to be separated into x and y variables?
      return playerAttackCoord;
    } else if (playerTurn == false) {
      let computerAttackCoord = Player.computerAttackMove();
      Player.swapTurns(player);

      return computerAttackCoord;
    }
  };
}
export default Player;
