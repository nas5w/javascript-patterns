const bubbleSort = require("../../../src/algorithms/sorting/bubbleSort");

test("Sorted array remains in order", () => {
  const inputArr = [1, 2, 3, 4, 5];

  const result = bubbleSort(inputArr);

  expect(result).toEqual(inputArr);
});

test("Unsorted array is sorted", () => {
  const unsortedArr = [5, 2, 3, 1, 4];
  const sortedArr = [1, 2, 3, 4, 5];

  const result = bubbleSort(unsortedArr);

  expect(result).toEqual(sortedArr);
});

test("Single item array is unchanged", () => {
  expect(bubbleSort([5])).toEqual([5]);
});

test("Empty array is unchanged", () => {
  expect(bubbleSort([])).toEqual([]);
});

test("Negative array is sorted", () => {
  const unsortedArr = [-5, -1, -10, -15, -20];
  const sortedArr = [-20, -15, -10, -5, -1];

  const result = bubbleSort(unsortedArr);

  expect(result).toEqual(sortedArr);
});
