class Ship {
    constructor(length, hitLocation) {
        this.length = length;
        this.isHit = hitLocation;
        this.isAlive = true;
    }

    // Test hit() - Takes a number and marks that position as 'hit'
    static hit(num) {
        let positionHit = num;
        return positionHit;
    }

    // Test isSunk() - Calculates based on length and whether all positions are 'hit'
    static isSunk() {
        // if isHit of object is filled, return isAlive as false
    }
}
module.exports = Ship;