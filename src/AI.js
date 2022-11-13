class Computer {
    constructor (name) {
        this.name = name;
    }

    // function to generate random x,y coordinates
    generateCoordinate = () => {
        let x = Math.floor(Math.random() * 10) - 1;
        let y = Math.floor(Math.random() * 10) - 1;
        return [x,y];
    }

    // x,y arguments should be randomly generated to be input into computerPlace / computerAttack OR Gameboard class functions placeShip, and receiveAttack
    // attackMove will be output into Gameboard functions
    static computerAttackMove = () => {
        const x = Math.floor(Math.random() * 10) - 1;
        const y = Math.floor(Math.random() * 10) - 1;
        return [x,y];
    }

    // computerPlace function

    // computerAttack function

    // Use minimax logic for AI?
}
module.exports = Computer;