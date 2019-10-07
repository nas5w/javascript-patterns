const insertionSort = require("../../../src/algorithms/sorting/insertionSort");
const compareArrays = require("../../helpers/compareArrays");

describe("Insertion Sort Algorithm", () => {
  it("Sorted array remains in order", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = insertionSort(arr1);
    expect(compareArrays(arr1, arr2)).toBe(true);
  });

  it("Unsorted array is sorted", () => {
    const arr1 = [5, 2, 3, 1, 4];
    const arr2 = insertionSort(arr1);
    expect(compareArrays([1, 2, 3, 4, 5], arr2)).toBe(true);
  });

  it("Single item array is unchanged", () => {
    const arr1 = [5];
    const arr2 = insertionSort(arr1);
    expect(compareArrays(arr1, arr2)).toBe(true);
  });

  it("Empty array is unchanged", () => {
    const arr1 = [];
    const arr2 = insertionSort(arr1);
    expect(compareArrays(arr1, arr2)).toBe(true);
  });

  it("Negative array is sorted", () => {
    const arr1 = [-5, -1, -10, -15, -20];
    const arr2 = insertionSort(arr1);
    expect(compareArrays([-20, -15, -10, -5, -1], arr2)).toBe(true);
  });
});
