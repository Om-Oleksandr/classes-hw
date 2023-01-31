function getVolume3D(figure3D) {
  return `${figure3D.name} volume = ${figure3D.getVolume()}`;
}

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  getVolume() {}
}

class Sphere extends Figure3D {
  constructor(radius) {
    super("sphere");
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (typeof value !== "number") {
      throw new TypeError("Radius must be a number");
    }
    if (value <= 0) {
      throw new RangeError("Radius must be greater than zero");
    }
    this._radius = value;
  }
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this._radius, 3);
  }
}

class Cube extends Figure3D {
  constructor(side) {
    super("cube");
    this.side = side;
  }
  get side() {
    return this._side;
  }
  set side(value) {
    if (typeof value !== "number") {
      throw new TypeError("Side must be a number");
    }
    if (value <= 0) {
      throw new RangeError("Side must be greater than zero");
    }
    this._side = value;
  }
  getVolume() {
    return Math.pow(this._side, 3);
  }
}

class Cylinder extends Figure3D {
  constructor(radius, height) {
    super("cylinder");
    this.radius = radius;
    this.height = height;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (typeof value !== "number") {
      throw new TypeError("Radius must be a number");
    }
    if (value <= 0) {
      throw new RangeError("Radius must be greater than zero");
    }
    this._radius = value;
  }
  get height() {
    return this._height;
  }
  set height(value) {
    if (typeof value !== "number") {
      throw new TypeError("Height must be a number");
    }
    if (value <= 0) {
      throw new RangeError("Height must be greater than zero");
    }
    this._height = value;
  }
  getVolume() {
    return Math.PI * Math.pow(this._radius, 2) * this._height;
  }
}
try {
  const sphere = new Sphere(1);
  const cube = new Cube(4);
  const cylinder = new Cylinder(4, 3);
  console.log(getVolume3D(sphere));
  console.log(getVolume3D(cube));
  console.log(getVolume3D(cylinder));
} catch (error) {
  console.log(error);
}

// function logArea(figure){
//   if (figure instanceof Figure) {
//     return `${figure.name} area = ${figure.getArea()}`;
//   }
//   throw new TypeError("Instance must be extends Figure");
// }

// class Figure {
//   constructor(name) {
//     this.name = name;
//   }
//   getPerimeter() {}
//   getArea() {}
// }

// class Circle extends Figure {
//   constructor(radius) {
//     super("circle");
//     this.radius = radius;
//   }
//   get radius() {
//     return this._radius;
//   }
//   set radius(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("Radius must be a number");
//     }
//     if (value <= 0) {
//       throw new RangeError("Radius must be positive");
//     }
//     this._radius = value;
//   }
//   getPerimeter() {
//     return 2 * Math.PI * this._radius;
//   }
//   getArea() {
//     return Math.PI * this._radius * this._radius;
//   }
// }

// class Square extends Figure {
//   constructor(side) {
//     super("square");
//     this.side = side;
//   }
//   get side() {
//     return this._side;
//   }
//   set side(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("Side must be a number");
//     }
//     if (value <= 0) {
//       throw new RangeError("Side must be positive");
//     }
//     this._side = value;
//   }
//   getPerimeter() {
//     return 4 * this._side;
//   }
//   getArea() {
//     return this._side * this._side;
//   }
// }

// class Triangle extends Figure {
//   constructor(side1, side2, side3) {
//     super("triangle");
//     this.setSides(side1, side2, side3);
//   }
//   setSides(side1, side2, side3) {
//     if (
//       typeof side1 !== "number" ||
//       typeof side2 !== "number" ||
//       typeof side3 !== "number"
//     ) {
//       throw new TypeError("Side must be a number");
//     }
//     if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
//       throw new RangeError("Side must be positive")
//     }
//     if (
//       side1 + side2 > side3 &&
//       side1 + side3 > side2 &&
//       side3 + side2 > side1
//     ) {
//       this._side1 = side1;
//       this._side2 = side2;
//       this._side3 = side3;
//       return;
//     }
//     throw new Error("Cannot calculate");
//   }
//   get side1() {
//     return this._side1;
//   }
//   get side2() {
//     return this._side2;
//   }
//   get side3() {
//     return this._side3;
//   }
//   getPerimeter() {
//     return this._side1 + this._side2 + this._side3;
//   }
//   getArea() {
//     const halfPerimeter = this.getPerimeter()/2;
//     return Math.sqrt(
//       (this._side1 + this._side2 + this._side3) *
//         (this._side1 + this._side2 + this._side3 - this._side1) *
//         (this._side1 + this._side2 + this._side3 - this._side2) *
//         (this._side1 + this._side2 + this._side3 - this._side3)
//     );
//   }
// }

// const figure1 = new Circle(10);
// const figure2 = new Square(6);
// const figure3 = new Triangle(10, 6, 10);
// figure1.radius += 2;
// console.log(figure1.getArea());
// console.log(figure2.getArea());
// console.log(figure3.getArea());
// console.log(logArea(figure1));
// console.log(logArea(figure2));
// console.log(logArea(figure3));
