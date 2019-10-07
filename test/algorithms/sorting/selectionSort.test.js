const selectionSort = require('../../../src/algorithms/sorting/selectionSort');
const compareArrays = require('../../helpers/compareArrays');

describe('Selection sort algorithm', () => {
    it('Keeps sorted arrays in order', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = selectionSort(arr1);
        expect(compareArrays(arr2, [1, 2, 3, 4, 5])).toBe(true);
    });
    it('Sorts an unsorted array', () => {
        const arr1 = [5, 2, 3, 1, 4];
        const arr2 = selectionSort(arr1);
        expect(compareArrays(arr2, [1, 2, 3, 4, 5])).toBe(true);
    });
    it('Does not change a single item array', () => {
        const arr1 = [5];
        const arr2 = selectionSort(arr1);
        expect(compareArrays(arr2, [5])).toBe(true);
    });
    it('Does not change an empty array', () => {
        const arr1 = [];
        const arr2 = selectionSort(arr1);
        expect(compareArrays(arr2, [])).toBe(true);
    });
    it('Sorts negative numbers', () => {
        const arr1 = [-5, -1, -10, -15, -20];
        const arr2 = selectionSort(arr1);
        expect(compareArrays(arr2, [-20, -15, -10, -5, -1])).toBe(true);
    });
});