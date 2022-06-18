class Calculator {
  constructor(a, b) {
  this.a = a;
  this.b = b;
  }

  add() {
    let sum = this.a + this.b;
    return sum;
  }

  subtract() {
    let sub = this.a - this.b;
    return sub;
  }

  multiply() {
    let product = this.a * this.b;
    return product;
  }

  divide() {
    let div = this.a / this.b;
    return div;
  }
}

module.exports = Calculator;