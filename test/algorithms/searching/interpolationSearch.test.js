const interpolationSearch = require("../../../src/algorithms/searching/interpolationSearch");

describe("Interpolation Search", () => {
  it("Finds item in array", () => {
    const arr = [1, 3, 5, 7, 8, 9];
    const result = interpolationSearch(arr, 8);
    expect(result).toBe(4);
  });
  it("Finds item in arrays of length 1", () => {
    const arr = [1];
    const result = interpolationSearch(arr, 1);
    expect(result).toBe(0);
  });
  it("returns NaN when the item does not exist", () => {
    const arr = [1, 3, 5, 7, 8, 9];
    const result = interpolationSearch(arr, 2);
    expect(result).toBe(NaN);
  });
});
