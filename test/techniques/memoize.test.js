const memoize = require('../../src/techniques/memoize');

describe('Memoization', () => {
  it("should store the result of the function call and return the cached result faster when the input occurs again", () => {
    const times10 = (x) => (x * 10);
    const memoizedTimes10 = memoize(times10);
  
    const startTime1 = performance.now();
    const result1 = memoizedTimes10(8);
    const endTime1 = performance.now();
    const runTime1 = endTime1 - startTime1;

    expect(result1).toBe(80);
  
    const startTime2 = performance.now();
    const result2 = memoizedTimes10(8);
    const endTime2 = performance.now();
    const runTime2 = endTime2 - startTime2;
  
    expect(result2).toBe(80);
  
    expect(runTime2).toBeLessThan(runTime1);
  });

  it("should memoize a recursive function", () => {
    const factorial = (x) => {
      if (x === 0) {
        return 1;
      } else {
        return x * factorial(x - 1);
      }
    };

    const memoizedFactorial = memoize(factorial);

    const startTime1 = performance.now();
    const result1 = memoizedFactorial(6);
    const endTime1 = performance.now();
    const runTime1 = endTime1 - startTime1;

    expect(result1).toBe(720);

    const startTime2 = performance.now();
    const result2 = memoizedFactorial(6);
    const endTime2 = performance.now();
    const runTime2 = endTime2 - startTime2;

    expect(result2).toBe(720);

    expect(runTime2).toBeLessThan(runTime1);
  });

  it("should handle multiple arguments", () => {
    const add = (x, y, z) => x + y + z;
    const memoizedAdd = memoize(add);

    const startTime1 = performance.now();
    const result1 = memoizedAdd(1, 2, 3);
    const endTime1 = performance.now();
    const runTime1 = endTime1 - startTime1;

    expect(result1).toBe(6);

    const startTime2 = performance.now();
    const result2 = memoizedAdd(1, 2, 3);
    const endTime2 = performance.now();
    const runTime2 = endTime2 - startTime2;

    expect(result2).toBe(6);

    expect(runTime2).toBeLessThan(runTime1);
  });
});
