const newSum = require('./main');

test('adds 1 + 2 to equal 3', () => {
    expect(newSum(1, 2)).toBe(3);
});

const rotateArray = require('./main');

test('rotate massive', () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);
})

const rotateDate = require('./main');

test('rotate massive', () => {
    expect(rotateDate(`2020-11-26`, 3)).toBe('26.11.2020');
})