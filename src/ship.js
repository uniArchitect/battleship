class Ship {
    constructor(length) {
        this.length = length;
        // isHit countdown array from value given in length - ex. length = 4, isHit = [1,2,3,4]
        this.hitSquares = [...Array(length).keys()].map( i => i+1);
        this.isAlive = true;
    }

    // Takes a number and marks that position as 'hit'
    // Test hit to be hit multiple times
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