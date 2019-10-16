const Factory = require('../../src/patterns/factory');

test('Factory returns the associated class to the provided string', () => {
  const Dog = Factory.getAnimal('dog');
  const dog = new Dog('lazy');
  expect(dog).toBeInstanceOf(Dog);

  const Cat = Factory.getAnimal('cat');
  const cat = new Cat('kit');
  expect(cat).toBeInstanceOf(Cat);

  const Duck = Factory.getAnimal('duck');
  const duck = new Duck('duffy');
  expect(duck).toBeInstanceOf(Duck);
});

test('Factory returns null if no string is provided', () => {
  const nothing = Factory.getAnimal();
  expect(nothing).toBe(null);
});
