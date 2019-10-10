const exponentialSearch = require('../../../src/algorithms/searching/exponentialSearch');

describe('Exponential Search algorithm', () => {
  it('Find item in array', () => {
    const arr1 = [1, 3, 5, 7, 8, 9];
    const result = exponentialSearch(arr1, 7);
    expect(result).toBe(true);
  });

  it('Item not found in array', () => {
    const arr1 = [];
    const result = exponentialSearch(arr1, 7);
    expect(result).toBeFalsy();
  });

  it('Item not found in an array', () => {
    const arr1 = [1, 3, 5, 7, 8, 9];
    const result = exponentialSearch(arr1, 12);
    expect(result).toBeFalsy();
  });
});
