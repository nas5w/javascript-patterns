const mergeSort = require("../../../algorithms/sorting/mergeSort");
const compareArrays = require("../../helpers/compareArrays");

test("Sorted array remains in order", () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = mergeSort(arr1);
  expect(compareArrays(arr1, arr2)).toBe(true);
});

test("Unsorted array is sorted", () => {
  const arr1 = [5, 2, 3, 1, 4];
  const arr2 = mergeSort(arr1);
  expect(compareArrays([1, 2, 3, 4, 5], arr2)).toBe(true);
});

test("Single item array is unchanged", () => {
  const arr1 = [5];
  const arr2 = mergeSort(arr1);
  expect(compareArrays(arr1, arr2)).toBe(true);
});

test("Empty array is unchanged", () => {
  const arr1 = [];
  const arr2 = mergeSort(arr1);
  expect(compareArrays(arr1, arr2)).toBe(true);
});

test("Negative array is sorted", () => {
  const arr1 = [-5, -1, -10, -15, -20];
  const arr2 = mergeSort(arr1);
  expect(compareArrays([-20, -15, -10, -5, -1], arr2)).toBe(true);
});
