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
    observers.forEach(observer => observer.update(content));
  };

  return {
    addObserver,
    removeObserver,
    notifyObservers
  };
})();

const observer1 = {
  update: content => console.log(`Observer 1 notified of ${content}`)
};

const observer2 = {
  update: content => console.log(`Observer 2 notified of ${content}`)
};

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.removeObserver(observer1);

subject.notifyObservers("something");
