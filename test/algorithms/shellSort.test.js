const shellSort = require('../../src/algorithms/sorting/shellSort');

const cmprArray = require('../helpers/compareArrays');

test('Keeping empty as unchanged', _ => {
    const inputArray = [];
    const outputArray = shellSort(inputArray);
    expect(cmprArray(inputArray, outputArray)).toBe(true);
});

test('Keeping sigle item unchanged', _ => {
    const inputArray = [7];
    const outputArray = shellSort(inputArray);
    expect(cmprArray(inputArray, outputArray)).toBe(true);
});

test('Keeping sorted as sorted', _ => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const outputArray = shellSort(inputArray);
    expect(cmprArray(inputArray, outputArray)).toBe(true);
});

test('Sorting the unsorted of positives', _ => {
    const inputArray =  [7, 25, 16, 9, 1, 3, 4, 8, 99, 100, 2, 10000, 2000];
    const sortedArray = [1, 2, 3, 4, 7, 8, 9, 16, 25, 99, 100, 2000, 10000]
    const outputArray = shellSort(inputArray);
    expect(cmprArray(inputArray, outputArray)).toBe(true);
});

test('Sorting the unsorted array of negatives', _ => {
    const inputArray =  [-7, -25, -16, -9, -1, -3, -4, -8, -99, -100, -2, -10000, -2000];
    const sortedArray = [-10000, -2000, -100, -99, -25, -16, -9, -8, -7, -4, -3, -2, -1]
    const outputArray = shellSort(inputArray);
    expect(cmprArray(inputArray, outputArray)).toBe(true);
});

test('Sorting the unsorted array of mixed values', _ => {
    const inputArray = [10000, -2000, 99, -100, 25, -16, 9, -8, 3, -7, 2, -4, -1];
    const sortedArray = [-2000, -100, -16, -8, -7, -4, -1, 2, 3, 9, 25, 99, 10000]
    const outputArray = shellSort(inputArray);
    expect(cmprArray(sortedArray, outputArray)).toBe(true);
});