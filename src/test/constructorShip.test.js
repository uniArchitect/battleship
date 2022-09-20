const shipConstructor = require('../ship')

test('Ship class creates a new object', () => {
    expect(new shipConstructor(4, [])).toEqual({
        length: 4,
        hit: [],
        isAlive: true
    });
}) 