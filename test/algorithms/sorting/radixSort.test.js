const radixSort = require("../../../src/algorithms/sorting/radixSort");

test("Sorted array remains in order", () => {
  const inputArr = [1, 2, 3, 4, 5];

  const result = radixSort(inputArr);

  expect(result).toEqual(inputArr);
});

test("Unsorted array is sorted", () => {
  const unsortedArr = [5, 2, 3, 1, 4];
  const sortedArr = [1, 2, 3, 4, 5];

  const result = radixSort(unsortedArr);

  expect(result).toEqual(sortedArr);
});

test("Single item array is unchanged", () => {
  expect(radixSort([5])).toEqual([5]);
});

test("Empty array is unchanged", () => {
  expect(radixSort([])).toEqual([]);
});

test("Negative array is sorted", () => {
  const unsortedArr = [-5, -1, -10, -15, -20];
  const sortedArr = [-20, -15, -10, -5, -1];

  const result = radixSort(unsortedArr);

  expect(result).toEqual(sortedArr);
});
