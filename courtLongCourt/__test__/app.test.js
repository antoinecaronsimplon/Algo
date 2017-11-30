const app = require('../js/app');

test('filter array with number is divisible by 2', () => {
    expect(app.app('la','plage')).toEqual('laplagela')
});


test('filter array with number is divisible by 4', () => {
    expect(app.app('si', 'non')).toEqual('sinonsi');
});

