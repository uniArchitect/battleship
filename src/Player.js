import Computer from "./AI";

class Player {
    constructor(name) {
        this.name = name;
        this.turn = false;
    }

    static attackMove = (x,y) => {
        return [x,y];
    }

    // Reference Tic Tac Toe for game turn logic
    static playerMove = () => {
        const playerTurn = this.turn ? true : false;

        if(playerTurn == true) {
            // find way to grab input to use as argument in attackMove
            this.attackMove();
        } else if (playerTurn == false) {
            Computer.computerAttackMove();
        }
    }
}
module.exports = Player;