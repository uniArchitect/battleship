class Ship {
    constructor(length, hitLocation) {
        this.length = length;
        this.isHit = hitLocation;
        this.isAlive = true;
    }

    // Test hit() - Takes a number and marks that position as 'hit'
    static hit(num, hitLocation) {
        // hitLocation is an array that represents length of each ship - Goal: [1,2,3,4] toBe [x,2,3,4]
        let index = hitLocation.findIndex(spot => spot === num);
        // hitLocation.splice() - index[0] with 'x'
        hitLocation.splice(index, 1, 'x');
        
        return hitLocation;
    }

    // Test isSunk() - Calculates based on length and whether all positions are 'hit'
    static isSunk() {
        // if isHit of object is filled, return isAlive as false
    }
}
module.exports = Ship;