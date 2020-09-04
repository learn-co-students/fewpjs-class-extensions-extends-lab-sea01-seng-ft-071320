// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => (sum += side));
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides == 3) {
      let a = this.sides[0];
      let b = this.sides[1];
      let c = this.sides[2];
      return a + b > c && a + c > b && b + c > a;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides == 4) {
      let [a, b, c, d] = this.sides;
      return a == b && c == d && a == c;
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }
}
