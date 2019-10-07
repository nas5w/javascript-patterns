const singleton = require("../../src/patterns/singleton");

test("return the same instance reference", () => {
  const instance1 = singleton();
  const instance2 = singleton();

  expect(instance1).toBe(instance2);
});

test("each instance should return the same value", () => {
  const instance1 = singleton();
  const instance2 = singleton();

  expect(instance1()).toBe(instance2());
});
