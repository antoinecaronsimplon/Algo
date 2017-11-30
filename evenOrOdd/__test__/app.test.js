const app = require('../js/app');

test('will return Even with 2 because number is even', () => {
    expect(app.app(2)).toBe("Even");
});


test('will return Odd with 5 because number is odd', () => {
    expect(app.app(5)).toBe("Odd");
});

