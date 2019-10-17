const subject = (() => {
  let observers = [];

  const addObserver = observer => {
    observers.push(observer);
  };

  const removeObserver = observer => {
    const position = observers.indexOf(observer);
    observers.splice(position, 1);
  };

  const notifyObservers = content => {
    observers.forEach(observer => observer(content));
  };

  return {
    observers,
    addObserver,
    removeObserver,
    notifyObservers
  };
})();

module.exports = subject;
