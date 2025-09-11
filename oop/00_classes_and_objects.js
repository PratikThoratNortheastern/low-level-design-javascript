'use strict';
/**
Objects
In JavaScript, an object is a collection of data (properties) and actions (methods) stored as key–value pairs.

Properties hold values like strings, numbers, or even other objects.
Methods are functions inside the object that define what it can do.
Objects let you group related data and functionality together in one place.

Classes
In JavaScript, a class is a blueprint for creating objects with specific properties and methods. A class itself doesn’t hold values, it describes what an object should have and do. You create actual objects from a class using the new keyword.
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  showDetails() {
    console.log(`${this.name} is my favorite animal`);
  }
}

const animal = new Animal('Dog');
animal.showDetails();
