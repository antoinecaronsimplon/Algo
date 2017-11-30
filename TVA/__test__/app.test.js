const app = require('../js/app');

test('get HT price with 19.6 % TVA', () => {
    expect(app.app(230)).toBe(192.31);
});

test('get HT price with 19.6 % TVA', () => {
    expect(app.app(1550)).toBe(1295.99);
});


