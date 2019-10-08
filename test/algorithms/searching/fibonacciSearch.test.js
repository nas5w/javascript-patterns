const fibonacciSearch = require('../../../src/algorithms/searching/fibonacciSearch');
const compareArrays = require('../../helpers/compareArrays');

describe('Fibonacci Search algorithm', () => {
    it('Find existing item in an array', () => {
        const arr = [2, 4, 10, 20, 35, 67];
        const result = fibonacciSearch(arr, 10);
        expect(result).toBe(2);
    });
    it('Find non-existing item in an array', () => {
        const arr = [2, 4, 10, 20, 35, 67];
        const result = fibonacciSearch(arr, 30);
        expect(result).toBe(-1);
    });
    it('Find existing item in an array', () => {
        const arr = [20, 25, 30, 56, 100, 120, 135];
        const result = fibonacciSearch(arr, 56);
        expect(result).toBe(3);
});