const {
  ShoppingCart,
  DebitCard,
  CreditCard,
  PayPal,
  BitCoin
} = require('../../src/patterns/strategy');

test('Strategy pattern using Debit card payment', () => {
  const cart = new ShoppingCart(new DebitCard());
  const result = cart.doPayment();
  expect(result).toBe('Paid using debit card');
});

test('Strategy pattern using Credit card payment', () => {
  const cart = new ShoppingCart(new CreditCard());
  const result = cart.doPayment();
  expect(result).toBe('Paid using credit card');
});

test('Strategy pattern using Paypal payment', () => {
  const cart = new ShoppingCart(new PayPal());
  const result = cart.doPayment();
  expect(result).toBe('Paid using Paypal');
});

test('Strategy pattern using Debit card payment', () => {
  const cart = new ShoppingCart(new BitCoin());
  const result = cart.doPayment();
  expect(result).toBe('Paid using bitcoin transfer');
});

test('Change strategy in runtime', () => {
  const cart = new ShoppingCart(new BitCoin());
  let result = cart.doPayment();
  expect(result).toBe('Paid using bitcoin transfer');
  cart.setStrategy(new DebitCard());
  result = cart.doPayment();
  expect(result).toBe('Paid using debit card');
});
