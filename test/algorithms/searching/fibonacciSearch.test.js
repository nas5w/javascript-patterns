const fibonacciSearch = require('../../../src/algorithms/searching/fibonacciSearch');
const compareArrays = require('../../helpers/compareArrays');

describe('Fibonacci Search algorithm', () => {
    it('Find item in array', () => {
        const arr = [2, 4, 10, 20, 35, 67];
        const result = fibonacciSearch(arr, 10);
        expect(result).toBe(2);
    });
});