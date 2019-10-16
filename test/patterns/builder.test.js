const Builder = require('../../src/patterns/creational/builder');

test('Builder return the instance when a method is called', () => {
  const obj = new Builder();
  const instance = obj.setPropertyOne('Some Property')
  expect(instance).toBe(obj);
});

test('Builder has five properties when all methods are called', () => {
  const obj = new Builder();

  obj
    .setPropertyOne('Some property')
    .setPropertyTwo('Another property')
    .setPropertyThree('Yet another property')
    .setPropertyFour('Just one more property')
    .setPropertyFive('Last property');

  const expected = {
    propertyOne: 'Some property',
    propertyTwo: 'Another property',
    propertyThree: 'Yet another property',
    propertyFour: 'Just one more property',
    propertyFive: 'Last property'
  }

  expect(obj).toMatchObject(expected);
});
