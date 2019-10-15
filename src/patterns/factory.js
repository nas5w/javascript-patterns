class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }
}

class Duck {
  constructor(name) {
    this.name = name;
  }
}

class AnimalFactory {
  static getAnimal(animal) {
    if (!animal || typeof animal !== 'string') return null;

    let cls
    switch (animal.toLowerCase()) {
      case 'dog':
        cls = Dog;
        break;
      case 'cat':
        cls = Cat;
        break;
      case 'duck':
        cls = Duck;
        break;
    }

    return cls;
  }
}

module.exports = AnimalFactory;
