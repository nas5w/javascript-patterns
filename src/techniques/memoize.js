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

module.exports = memoize;
