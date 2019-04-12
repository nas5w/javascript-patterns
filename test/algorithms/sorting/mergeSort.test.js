const mergeSort = require("../../../algorithms/sorting/mergeSort");

const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

test("Sorted array remains in order", () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = mergeSort(arr1);
  expect(compareArrays(arr1, arr2)).toBe(true);
});
