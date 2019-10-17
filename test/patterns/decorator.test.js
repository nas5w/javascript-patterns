const decorator = require("../../src/patterns/structural/decorator");

test("decorates an instance with new properties in runtime", () => {
  const { User, DecoratedUser } = decorator;

  const newUser = new User("John");
  expect(newUser).toHaveProperty("username", "John");

  const decorations = {
    age: 31,
    "super-power": true
  };

  const decoratedUser = DecoratedUser(newUser, decorations);

  for (let prop in decorations) {
    expect(decoratedUser).toHaveProperty(prop, decorations[prop]);
  }
});
