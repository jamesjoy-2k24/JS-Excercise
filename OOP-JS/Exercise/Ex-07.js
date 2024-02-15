class Product {
  constructor(ID, name, price) {
    this.ID = ID;
    this.name = name;
    this.price = price;
  }
  total(q) {
    return this.price * q;
  }
}

class PersonalCareProduct extends Product {
  constructor(ID, name, price, warranty) {
    super(ID, name, price);
    this.warranty = warranty;
  }
    total(q) {
        return super.total(q) + this.warranty;
    }
}

const p1 = new PersonalCareProduct(1, 'Shampoo', 10, 5);

console.log(p1.total(2));
