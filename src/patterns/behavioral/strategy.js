/**
 * Strategy pattern
 * ================
 *
 * @reference
 * https://sourcemaking.com/design_patterns/strategy
 *
 * Refer Commented code (ES6 Version) for better implementation
 */

// abstract class or an interface which defines method: pay()
const ShoppingCart = function(paymentStrategy) {
  this.paymentStrategy = paymentStrategy;
};

ShoppingCart.prototype = {
  setStrategy: function(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  },

  doPayment: function() {
    return this.paymentStrategy.pay();
  }
};

const DebitCard = function() {
  this.pay = function() {
    // payment processes...
    return 'Paid using debit card';
  };
};

const CreditCard = function() {
  this.pay = function() {
    // payment processes...
    return 'Paid using credit card';
  };
};

const PayPal = function() {
  this.pay = function() {
    // payment processes...
    return 'Paid using Paypal';
  };
};

const BitCoin = function() {
  this.pay = function() {
    // payment processes...
    return 'Paid using bitcoin transfer';
  };
};

module.exports = {
  ShoppingCart,
  DebitCard,
  CreditCard,
  PayPal,
  BitCoin
};

/* ES6 Version :

class PaymentStrategy {
  // abstract class or an interface which defines method: pay()
  pay() {}
}

class DebitCartPayment extends PaymentStrategy {
  // concrete strategy implementing pay() method
  pay() {
    console.log('Paid using debit cards');
  }
}

class CreditCartPayment extends PaymentStrategy {
  // concrete strategy implementing pay() method
  pay() {
    console.log('Paid using credit cards');
  }
}

class PaypalPayment extends PaymentStrategy {
  // concrete strategy implementing pay() method
  pay() {
    console.log('Paid using paypal transfer');
  }
}

class BitcoinTransfer extends PaymentStrategy {
  // concrete strategy implementing pay() method
  pay() {
    console.log('Paid using bitcoin transfer');
  }
}

class ShoppingCart {
  // Client using PaymentStrategy which is defined in the run time.
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  doPayment() {
    this.paymentStrategy.pay();
  }
}

export {
  DebitCartPayment,
  CreditCartPayment,
  PaypalPayment,
  BitcoinTransfer,
  ShoppingCart
};

*/
