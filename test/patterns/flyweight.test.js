const InsectFactory = require('../../src/patterns/flyweight');

test('returns the same object reference given the same input', () => {
  const insects = new InsectFactory();
  const fly1 = insects.get('fly');
  const fly2 = insects.get('fly');
  // toBe uses referential equality, so these objects are
  // guaranteed to point to the same object reference
  expect(fly1 === fly2).toBe(true);
});

test('only increments count the first time an insect is accessed', () => {
  const insects = new InsectFactory();
  const fly1 = insects.get('fly');
  const fly2 = insects.get('fly');
  const fly3 = insects.get('fly');
  const dragonfly1 = insects.get('dragonfly');
  const dragonfly2 = insects.get('dragonfly');
  expect(insects.getTotalInsects()).toBe(2);
});

test('throws error if insect not in DB', () => {
  const insects = new InsectFactory();
  expect(() => insects.get('human')).toThrow('Insect not in database!');
});
