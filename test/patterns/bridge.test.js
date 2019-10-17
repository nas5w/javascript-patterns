const Bridge = require("../../src/patterns/structural/bridge");

test("Implementors should have the same interface but different behavior", () => {
  const { Implementors } = Bridge;

  const redColor = new Implementors.Red();
  const blueColor = new Implementors.Blue();

  expect(Object.keys(redColor)).toEqual(Object.keys(blueColor));
  expect(redColor.getColorName()).not.toBe(blueColor.getColorName());
});

test("Abstractions may have different interface", () => {
  const { Abstractions } = Bridge;

  const circle = new Abstractions.Circle();
  const rectangle = new Abstractions.Rectangle();

  expect(Object.keys(circle)).not.toEqual(Object.keys(rectangle));
});

test("Allows two components to work together with each component having its own interface", () => {
  const { Abstractions, Implementors } = Bridge;

  const redColor = new Implementors.Red();
  const blueColor = new Implementors.Blue();

  const redCircle = new Abstractions.Circle(redColor);
  expect(redCircle.plot()).toMatch(/red circle/i);

  const blueCircle = new Abstractions.Circle(blueColor);
  expect(blueCircle.plot()).toMatch(/blue circle/i);

  const redRectangle = new Abstractions.Rectangle(redColor);
  expect(redRectangle.draw()).toMatch(/red rectangle/i);

  const blueRectangle = new Abstractions.Rectangle(blueColor);
  expect(blueRectangle.draw()).toMatch(/blue rectangle/i);
});
