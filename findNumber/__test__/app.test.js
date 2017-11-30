const app = require('../js/app');

test('filter array with number is divisible by 2', () => {
    expect(app.app([2,4,6,7],2)).toEqual([2,4,6]);
});


test('filter array with number is divisible by 4', () => {
    expect(app.app([2,4,6,7,8],4)).toEqual([4,8]);
});

