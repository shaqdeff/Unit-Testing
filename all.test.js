import Calculator from './calculator';
const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const capitalize = require('./capitalizeFirstChar');

describe('String Tests', () => {
  let string = 'learn';
test('string length should be 5', () => {
  expect(stringLength(string)).toBe(5);
});
test('string should be at least 1 character long ', () => {
  expect(stringLength(string)).toBeGreaterThanOrEqual(1);
});
test('string should not be longer than 10 characters', () => {
  expect(stringLength(string)).toBeLessThanOrEqual(10);
});

});

describe('Reverse the string', () => {
  test('Expected output: nrael', () => {
    let string = 'learn';
    expect(reverseString(string)).toBe('nrael');
  });
});

describe('Calculator Tests', () => {
  const calculator = new Calculator(3,4);
  test('Add 3+4 = 7', () => {
    let sum = calculator.add();
    expect(sum).toEqual(7);
  });
  test('Subtract 3-4 = -1', () => {
    let sub = calculator.subtract();
    expect(sub).toEqual(-1);
  });
  test('Multiply 3*4 = 12', () => {
    let product = calculator.multiply();
    expect(product).toEqual(12);
  });
  test('Divide 3/4 = 0.75', () => {
    let division = calculator.divide();
    expect(division).toEqual(0.75);
  });
  
  });

  describe('Capitalize First letter of the string', () => {
    test('Expected output: Learn', () => {
      let string = 'learn';
      expect(capitalize(string)).toBe('Learn');
    });
  });

