class Player {
    constructor(name) {
        this.name = name;
        this.turn = false;
    }

    static playerAttackMove = (x,y) => {
        return [x,y];
    }

    // function to generate random x,y coordinates
    // x,y arguments should be randomly generated to be input into computerPlace / computerAttack OR Gameboard class functions placeShip, and receiveAttack
    // Write in logic to not repeat a coordinate - in the future
    // attackMove will be output into Gameboard functions
    static computerAttackMove = () => {
        const x = Math.floor(Math.random() * 10) - 1;
        const y = Math.floor(Math.random() * 10) - 1;
        return [x,y];
    }

    // Reference Tic Tac Toe for game turn logic
    static playerMove = () => {
        const playerTurn = this.turn ? true : false;

        if(playerTurn == true) {
            // find way to grab input to use as argument in attackMove
            this.attackMove();
        } else if (playerTurn == false) {
            this.computerAttackMove();
        }
    }
}
module.exports = Player;