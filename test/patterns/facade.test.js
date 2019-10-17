const Facade = require('../../src/patterns/facade');

test('Facade returns a pizza', async () => {
  const pizza = await Facade.makeFood('pizza');
  expect(pizza).toHaveProperty('recipe', { name: 'pizza', procedure: ['a long procedure for the Chef'] });
  expect(pizza).toHaveProperty('ingredients', ['mozzarella', 'tomato purees', 'dough', 'salt']);
});

test('Facade returns a carbonara', async () => {
  const carbonara = await Facade.makeFood('carbonara');
  expect(carbonara).toHaveProperty('recipe', { name: 'carbonara', procedure: ['a long procedure for the Chef'] });
  expect(carbonara).toHaveProperty('ingredients', ['cheek lard', 'spaghetti', 'egg yolks', 'salt', 'pepper', 'pecorino']);
});

test('Facade throws an error with a wrong dish', async () => {
  let error;
  try {
    await Facade.makeFood('hot dog');
  } catch (err) {
    error = err;
  }

  expect(error).not.toBeUndefined;
  expect(error.message).toBe('Cannot find any recipe associated to this dish');
});
