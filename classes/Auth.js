const Customer = require('./Customer');

class Auth {
  constructor() {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    const newCustomer = new Customer(name, email, shippingAddress);
    this.customers.push(newCustomer);
  }

  login(email) {
    const account = this.customers.filter(
      (customer) => customer.email === email
    )[0];

    if (!account) return null;

    return account;
  }
}

module.exports = Auth;
