'use strict';
// Before the class syntax was introduced, we used function constructors.
// It was a primary way of doing OOP
// Function constructors are just regular functions.
// The only difference is that there is a naming convention.
// Start function names with a capital letter

function Person(name, age) {
  // the left side are my variables which I can use. however I want. They are placeholders.
  // the right side are the values it gets from the function parameters.
  this.name = name;
  this.age = age;
}

// Another example can be:
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// creating instances
let car = new Car('toyota', 'Camry');
// console.log(car);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type} tea`;
  };
}

let tea = new Tea('Lemon');
let tea2 = new Tea('Black');

// console.log(tea.describe());
// console.log(tea2.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function (sound) {
  this.sound = sound;
  return `${this.species} will make a ${this.sound} sound`;
};

let dog = new Animal('Doberman');
// console.log(dog);
// console.log(dog.sound('barking'));

let cow = new Animal('Highland Cow');
// console.log(cow);
// console.log(cow.sound('Moo-ing'));

// to ensure all objects are initialised using the new keyword:
function Coffee(blend) {
  if (!new.target) {
    throw new Error('Coffee should be called with the new Keyword');
  }
  this.blend = blend;

  return `I love this ${this.blend}`;
}

let coffee = new Coffee('Buthello');
let matcha = Coffee('Matcha');
