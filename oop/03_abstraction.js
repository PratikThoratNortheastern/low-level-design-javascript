'use strict';
/**
 * Abstraction is basically hiding the implementation details and showing only the
 * necessary features of the object
 */

class Shape {
  constructor(name) {
    this.name = name;
  }

  calculateArea() {
    throw new Error('Method calculateArea() must be implemented first');
  }

  display() {
    console.log(`The ${this.name} has the area of ${this.calculateArea()}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  calculateArea() {
    return Math.floor(Math.PI * this.radius * this.radius);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// class Square extends Shape {
//   constructor() {
//     super('Square');
//   }
// }

const rectangle = new Rectangle(4, 5);
rectangle.display();

const circle = new Circle(5);
circle.display();

// const square = new Square();
// square.display();
