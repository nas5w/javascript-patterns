const Car = require('../../src/patterns/prototype');

const myCar = Object.create(Car, { owner: { value: 'Phan' } });
test("return prototype Car", () => {
    expect(myCar.__proto__).toBe(Car);
    expect(myCar.color()).toBe('color');
    expect(myCar.brand()).toBe('brand');
});
