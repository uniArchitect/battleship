/* eslint-disable no-undef */
const Ship = require('../ship');

test('Ship class creates a new object', () => {
    expect(new Ship(4, [1,2,3,4])).toEqual({
        length: 4,
        isHit: [1,2,3,4],
        isAlive: true,
    });
}); 

test('Ship is hit', () => {
    expect(Ship.hit(1, [1,2,3,4])).toEqual(['x',2,3,4]);
});