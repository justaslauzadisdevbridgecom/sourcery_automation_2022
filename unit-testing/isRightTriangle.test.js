const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is pitagor', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('0, 4, 5 is pitagor', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
});

test('-3, 4, 5 is pitagor', () => {
    expect(isRightTriangle(-3, 4, 5)).toBe(false);
});