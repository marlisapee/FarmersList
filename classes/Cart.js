class Cart {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addProduct(newProduct) {
    this.total += newProduct.price;
    this.products.push(newProduct);
  }

  removeProduct(i) {
    const product = this.products.splice(i, 1);
    this.total -= product[0].price;
  }

  getTotal() {
    return this.total;
  }

  clear() {
    this.total = 0;
    this.products = [];
  }
}

module.exports = Cart;
