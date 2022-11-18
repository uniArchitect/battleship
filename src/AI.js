class Computer {
    constructor (name) {
        this.name = name;
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

    // Use minimax logic for AI?
}
module.exports = Computer;