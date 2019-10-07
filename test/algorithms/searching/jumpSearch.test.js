const jumpSearch = require("../../../src/algorithms/searching/jumpSearch");

describe("Jump Search algorithm", () => {
  it("tests for item does exist", () => {
    const arr1 = [1, 3, 5, 7, 8, 9];
    const result = jumpSearch(arr1, 8, 7);
    expect(result).toBe(true);
  });
  it("tests for item does not exist", () => {
    const arr1 = [1, 3, 5, 7, 8, 9];
    const result = jumpSearch(arr1, 20);
    expect(result).toBe(false);
  });
  it("tests for item does exist when jumpSize is valid", () => {
    const arr1 = [1, 3, 5, 7, 8, 9];
    const result = jumpSearch(arr1, 8, 7, 2);
    expect(result).toBe(true);
  });
  it("tests for item does not exist when jumpSize is valid", () => {
    const arr1 = [1, 3, 5, 7, 8, 9];
    const result = jumpSearch(arr1, 20);
    expect(result).toBe(false);
  });
  it("tests for item does exist when jumpSize is invalid", () => {
    const arr1 = [1, 3, 5, 7, 8, 9, 40, 100, 200];
    const result = jumpSearch(arr1, 100, -20);
    expect(result).toBe(true);
  });
  it("tests for item does not exist when jumpSize is invalid", () => {
    const arr1 = [1, 3, 5, 7, 8, 9, 40, 100, 200];
    const result = jumpSearch(arr1, 100, -20);
    expect(result).toBe(true);
  });
});
