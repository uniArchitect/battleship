class Player {
    constructor(name) {
        this.name = name;
    }

    static attackMove = (x,y) => {
        return [x,y];
    }
}
module.exports = Player;