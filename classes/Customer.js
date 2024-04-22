class Customer {
  constructor(name, email, shippingAddress) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.rewardPoints = 0;
    this.orderHistory = [];
  }

  addToOrderHistory(cart) {
    this.orderHistory.push(cart);
  }

  getRewardPoints() {
    let points = 0;
    this.orderHistory.forEach((cart) => {
      cart.products.map((product) => (points += product.rewardPoints));
    });
    return points;
  }
}

module.exports = Customer;
