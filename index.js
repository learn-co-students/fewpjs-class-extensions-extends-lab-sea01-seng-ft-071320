class Polygon {
  constructor(sides) {
    this.sides = sides;

    // for (let i = 0; i < sides.length; i++) {
    //   const sideNum = "side" + (i + 1);

    //   this[sideNum] = sides[i];
    // }
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, side) => (total += side), 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) {
      return false;
    } else {
      const [a, b, c] = this.sides;

      return a + b > c && a + c > b && b + c > a;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) {
      return false;
    } else {
      const [a, b, c, d] = this.sides;

      return a === b && a === c && a === d;
    }
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }
}
