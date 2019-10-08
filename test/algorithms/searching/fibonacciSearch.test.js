const fibonacciSearch = require('../../../src/algorithms/searching/fibonacciSearch');

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
    it('Find existing item in an float array', () => {
        const arr = [20.45, 25.34, 30.21, 56.00, 100.01, 120.32, 135.11];
        const result = fibonacciSearch(arr, 100.01);
        expect(result).toBe(4);
    });
    it('Find existing item in an array with -ve ints', () => {
        const arr = [-22, -10, -5, 0, 11, 27, 50, 104];
        const result = fibonacciSearch(arr, -5);
        expect(result).toBe(2);
    });
});