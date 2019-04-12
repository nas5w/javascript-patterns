const memoize = func => {
  let cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache.hasOwnProperty(key)) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
};

const memoizedFunc = memoize(someFunc);

memoizedFunc(1, 2, 3); // Executes someFunc
memoizedFunc(1, 2, 3); // Returns cached result!
