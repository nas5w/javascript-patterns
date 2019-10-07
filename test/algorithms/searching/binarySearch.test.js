const binarySearch = require('../../../src/algorithms/searching/binarySearch');
const compareArrays = require('../../helpers/compareArrays');

describe('Binary Search algorithm', () => {
    it('Find item in array', () => {
        const arr1 = [1, 3, 5, 7, 8, 9];
        const result = binarySearch(arr1, 8);
        expect(result).toBe(true);
    });
});