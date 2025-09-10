'use strict';
/**
 * Javascript implements OOPs throught prototypes.
 * OOPs allow the features like encapsulation, abstraction, inheritence and polymorphism
 *
 * ENCAPSULATION:
 * It is basically building data(properties) and methods(functions) inside an object while restricting direct access to some of them
 */

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    let speed = 12;

    this.getSpeed = () => speed;
    this.setSpeed = (value) => (speed = value > 0 ? value : 0);
  }

  accelerate() {
    this.setSpeed(this.getSpeed() + 10);
    console.log(
      `${this.brand} with ${
        this.model
      } is currently at ${this.getSpeed()} km/ph`
    );
  }

  brake() {
    this.setSpeed(this.getSpeed() - 10);
    console.log(
      `${this.brand} with ${
        this.model
      } is currently at ${this.getSpeed()} km/ph`
    );
  }
}

const newCar = new Car('Tesla', 'Truck');
newCar.accelerate();
newCar.brake();
