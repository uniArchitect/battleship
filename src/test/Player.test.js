const Player = require("../Player");

test("Player constructor", () => {
    expect(new Player('Han')).toEqual({
        name: "Han",
        turn: false
    });
});

test("Player calls an attack coordinate", () => {
    expect(Player.playerAttackMove(0,1)).toStrictEqual([0,1]);
});

test.skip("Computer calls an attack coordinate", () => {
    expect(Player.computerAttackMove()).toBe([1,2]);
});

test("Player calls an attack coordinate", () => {
    // In Progress
    let newPlayer = {
        name: "Han",
        turn: true,
    }
    expect(Player.playerMove( 0, 1, newPlayer )).toEqual({
        attackCoordinate: [0,1],
        playerTurn: false,
    });
});