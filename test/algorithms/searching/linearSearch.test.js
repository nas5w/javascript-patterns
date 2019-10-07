const linearSearch = require("../../../src/algorithms/searching/linearSearch");

describe("Linear Search algorithm", () => {
  it("Find item in array", () => {
    const arr1 = [1, 3, 5, 7, 8, 9];
    const result = linearSearch(arr1, 8);
    expect(result).toBe(4);
  });
  it("item not found in array", () => {
    const arr1 = [1, 3, 5, 7, 8, 9];
    const result = linearSearch(arr1, 22);
    expect(result).toBe(false);
  });
});
