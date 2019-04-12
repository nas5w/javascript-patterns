const getSingleton = (() => {
  let instance;
  let instanceNumber = 0;

  const createInstance = instanceNumber => {
    return () => {
      console.log(`I am instance ${instanceNumber}`);
    };
  };

  return () => {
    if (!instance) {
      instance = createInstance(++instanceNumber);
    }
    return instance;
  };
})();

const myFunc1 = getSingleton();
const myFunc2 = getSingleton();
const myFunc3 = getSingleton();
const myFunc4 = getSingleton();

myFunc1(); // I am instance 1
myFunc2(); // I am instance 1
myFunc3(); // I am instance 1
myFunc4(); // I am instance 1
