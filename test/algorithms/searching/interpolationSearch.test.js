const interpolationSearch = require("../../../src/algorithms/searching/interpolationSearch");

describe("Interpolation Search", () => {
  it("Finds item in array", () => {
    const arr = [1, 3, 5, 7, 8, 9];
    const result = interpolationSearch(arr, 8);
    expect(result).toBe(4);
  });
});
