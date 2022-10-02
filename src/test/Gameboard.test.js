/* eslint-disable no-undef */
const Gameboard = require("../Gameboard");

// test("Gameboard test empty array", () => {
//     expect(new Gameboard(10,10)).toEqual({
//         rows: 10,
//         cols: 10,
//         board: [
//             [0,0,0,0,0,0,0,0,0,0], 
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0], 
//         ]
//     })
// });

test("Gameboard call Ship class constructor", () => {
    const testBoard = {
        board: [
            [0,0,0,0,0],
            [0,1,2,3,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
        ],
        ship: {
            name: 'Battleship',
            hitSquares: [1, 2, 3],
            isAlive: true,
            length: 3,
        }
    }
    expect(Gameboard.placeShip('vertical', 0, 0, 4, testBoard)).toEqual({
        board: [
            [1,0,0,0,0],
            [2,1,2,3,0],
            [3,0,0,0,0],
            [4,0,0,0,0],
            [0,0,0,0,0],
        ],
        ship: {
            name: 'Battleship',
            hitSquares: [1, 2, 3],
            isAlive: true,
            length: 3,
        },
        // ship: {
        //     name: 'Battleship',
        //     hitSquares: [1, 2, 3, 4],
        //     isAlive: true,
        //     length: 4,
        // },
    });
});

// test("Gameboard call Ship class constructor", () => {
// expect(Gameboard.placeShip('vertical', 1, 2, 5, new Gameboard(10,10))).toEqual([
//             [0,0,0,0,0,0,0,0,0,0], 
//             [0,0,1,0,0,0,0,0,0,0],
//             [0,0,1,0,0,0,0,0,0,0],
//             [0,0,1,0,0,0,0,0,0,0],
//             [0,0,1,0,0,0,0,0,0,0],
//             [0,0,1,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0,0], 
//         ]
//     );
// });

// test("Ship receives an attack and declares hit at second position", () => {
//     expect(Gameboard.receiveAttack(1, 2, Gameboard.placeShip('horizontal', 1, 1, 3, new Gameboard(5,5)))).toEqual({
//         board: [
//         [0,0,0,0,0],
//         [0,1,"x",3,0],
//         [0,0,0,0,0],
//         [0,0,0,0,0],
//         [0,0,0,0,0],
//     ],
//         ship: {
//             hitSquares: [1, "x", 3],
//             isAlive: true,
//             length: 3,
//         }
//     });
// });

test("Ship receives an attack and declares hit at 3rd position", () => {
    let testBoard = {
        board: [
        [0,0,0,0,0],
        [0,"x","x",3,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
    ],
        ship: {
            name: 'Battleship',
            hitSquares: ["x", "x", 3],
            isAlive: true,
            length: 3,
        }
    }
    expect(Gameboard.receiveAttack(1, 3, testBoard)).toEqual({
        board: [
        [0,0,0,0,0],
        [0,"x","x","x",0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
    ],
        ship: {
            name: 'Battleship',
            hitSquares: ["x", "x", "x"],
            isAlive: false,
            length: 3,
        }
    });
});

// test("Ship receives an attack and declares ship is sunk", () => {
//     expect(Gameboard.checkEndGame(ship))
//         .toBe('End Game');
// });

// test("Ship receives an attack and declares miss", () => {
//     expect(Gameboard.receiveAttack(0, 0, Gameboard.placeShip('horizontal', 1, 1, 3, new Gameboard(5,5)))).toEqual({
//         board: [
//         ["m",0,0,0,0],
//         [0,1,2,3,0],
//         [0,0,0,0,0],
//         [0,0,0,0,0],
//         [0,0,0,0,0],
//     ],
//         ship: {
//             hitSquares: [1, 2, 3],
//             isAlive: true,
//             length: 3,    
//         }});
// });