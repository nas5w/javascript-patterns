const getSingleton = (() => {
  let instance;
  let instanceNumber = 0;

  const createInstance = instanceNumber => {
    return () => {
      return `I am instance ${instanceNumber}`;
    };
  };

  return () => {
    if (!instance) {
      instance = createInstance(++instanceNumber);
    }
    return instance;
  };
})();

module.exports = getSingleton;
