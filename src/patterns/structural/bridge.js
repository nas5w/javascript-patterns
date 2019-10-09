const Bridge = (() => {
  // refined Abstractions
  function Circle(color) {
    this.color = color;

    this.plot = function() {
      return `${this.color.getColorName()} Circle`;
    };
  }

  function Rectangle(color) {
    this.color = color;

    this.draw = function() {
      return `${this.color.getColorName()} Rectangle`;
    };
  }

  // concrete Implementors
  function Red() {
    this.getColorName = function() {
      return "Red";
    };
  }

  function Blue() {
    this.getColorName = function() {
      return "Blue";
    };
  }

  return {
    Implementors: { Red, Blue },
    Abstractions: { Circle, Rectangle }
  };
})();

module.exports = Bridge;
