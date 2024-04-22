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
    return this.products;
  }

  getTotal() {
    return this.total;
  }

  clear() {
    this.total = 0;
    this.products = [];
  }

  removeItemByName(name) {
    const index = this.products.findIndex((product) => product.name === name);
    if (index !== -1) {
      const product = this.products.splice(index, 1)[0];
      this.total -= product.price;
      return this.total;
    }
  }
}

module.exports = Cart;
