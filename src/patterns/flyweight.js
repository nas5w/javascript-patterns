const insectDB = {
  fly: {
    legs: 6,
    wings: 2,
  },
  dragonfly: {
    legs: 6,
    wings: 4,
  },
  ant: {
    legs: 6,
    wings: 0,
  },
};

class InsectFactory {
  constructor() {
    this.insectCache = {};
    this.count = 0;
  }

  get(type) {
    if (!insectDB[type]) {
      throw new Error('Insect not in database!');
    }
    if (!this.insectCache[type]) {
      this.insectCache[type] = insectDB[type];
      this.count++;
    }
    return this.insectCache[type];
  }

  getTotalInsects() {
    return this.count;
  }
}

module.exports = InsectFactory;
