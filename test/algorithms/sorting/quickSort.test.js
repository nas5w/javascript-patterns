const quickSort = require('../../../src/algorithms/sorting/quickSort');
const compareArrays = require('../../helpers/compareArrays');

describe('Quick Sort algorithm', () => {
    it('Keeps sorted arrays in order', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = quickSort([...arr1]);
        expect(compareArrays(arr1, arr2)).toBe(true);
    });
    it('Sorts an unsorted array', () => {
        const arr1 = [5, 2, 3, 1, 4];
        const arr2 = quickSort([...arr1]);
        expect(compareArrays(arr1, arr2)).toBe(true);
    });
    it('Does not change a single item array', () => {
        const arr1 = [5];
        const arr2 = quickSort([...arr1]);
        expect(compareArrays(arr1, arr2)).toBe(true);
    });
    it('Does not change an empty array', () => {
        const arr1 = [];
        const arr2 = quickSort([...arr1]);
        expect(compareArrays(arr1, arr2)).toBe(true);
    });
    it('Sorts negative numbers', () => {
        const arr1 = [-5, -1, -10, -15, -20];
        const arr2 = quickSort([...arr1]);
        expect(compareArrays(arr1, arr2)).toBe(true);
    });
});