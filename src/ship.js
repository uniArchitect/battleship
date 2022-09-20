class Ship {
    constructor(length) {
        this.length = length;
        this.hitSquare = false;
        this.isSunk = false;
    }

    hit = (attSquare) => {
        if (gameSquare == attSquare) {
            let hitSquare = 'hit';
            return hitSquare;
        }
    }

    isSunk = (length, hitSquare) => {
        if (Ship.hitSquare == 'hit') {
            return true;
        }
    }
}