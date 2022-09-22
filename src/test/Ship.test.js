/* eslint-disable no-undef */
const Ship = require('../ship');

test('Ship class creates a new object', () => {
    expect(new Ship(4)).toEqual({
        length: 4,
        hitSquares: [1,2,3,4],
        isAlive: true,
    });
}); 

test('Ship is hit once', () => {
    expect(Ship.hit(1, [1,2,3,4])).toEqual(['x',2,3,4]);
});

test('Ship is hit twice', () => {
    expect(Ship.hit(2, ['x',2,3,4])).toEqual(['x','x',3,4]);
});

test('Ship is hit three times', () => {
    expect(Ship.hit(3, ['x','x',3,4])).toEqual(['x','x','x',4]);
});

test('Ship is hit four times', () => {
    expect(Ship.hit(4, ['x','x','x',4])).toEqual(['x','x','x','x']);
});

test('Ship is hit in the third position', () => {
    expect(Ship.hit(3, [1,2,3,4])).toEqual([1,2,'x',4]);
});

test('Ship is sunk', () => {
    expect(Ship.checkSunk(['x','x','x','x'])).toEqual(true);
});