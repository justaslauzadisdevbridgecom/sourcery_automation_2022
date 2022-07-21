const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('20, 5, 5 is triangle', () => {
    expect(isTriangle(20, 5, 5)).toBe(false);
});

test('0, 1, 5 is not triangle', () => {
    expect(isTriangle(0, 1, 5)).toBe(false);
});