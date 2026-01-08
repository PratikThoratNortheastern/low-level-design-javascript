'use strict';
let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

// Creating classes in JavaScript

class Player {
  constructor(type, level) {
    this.type = type;
    this.level = level;
  }

  playerInfo() {
    return `This player has a type of ${this.type} and is at level ${this.level}`;
  }
}

//Inheritance: Basically, if we create another class and wish to borrow functionality from other classes.
//Inheritance is the ability to do so.

class Power extends Player {
  magic() {
    return `This player with ${this.type} can use Magic of level ${
      this.level * 2
    }`;
  }
}

let magicTypePlayer = new Power('Magic Type', 5);
// magicTypePlayer.playerInfo(); need to console log since we use return.
// console.log(magicTypePlayer.playerInfo());
// console.log(magicTypePlayer.magic());

// Encapsulation: restrict direct access to object data
class BankAccount {
  // constructor(parameters) {}
  #balance = 0;

  deposit(amount) {
    // we can access this #balance inside the class but cannot access of modify it directly from outside the class
    if (typeof amount !== 'number') {
      throw new Error('amount should be of type number');
    }
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

// let account = new BankAccount();
// console.log(account.#balance); cannot access balance since it is a private field hence it throws an error
// console.log(account.balance) even if we do this we get undefined since this property does not exist

// before deposit
// console.log('Amount before deposit', account.getBalance());
// after deposit
// console.log('Amount after deposit', account.deposit(3000));

// testing error
// console.log(account.deposit('300'));

// Abstraction: hiding the implementation details itself.
// In encapsulation we hide data. In Abstraction we hide how the implementations work itself

class CoffeeMachine {
  start() {
    return `Starting the coffee machine...`;
  }

  brewCoffee() {
    return `Brewing Coffee...`;
  }

  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();

    return `${msgOne} and ${msgTwo}`;
  }
}

let coffeeMachine = new CoffeeMachine();
console.log(coffeeMachine.pressStartButton()); //here we see that we don't care about how the startButton was implemented
// We only care about the working and not the implementations. Those are hidden from the users.

// Ploymorphism:

class Bird {
  fly() {
    return `Flying`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly :(`;
  }
}

let bird = new Bird();
let pengu = new Penguin();

//here the methods fly have different implementations all together.
// This is what it means by Polymorphism.
// console.log(bird.fly());
// console.log(pengu.fly());

// Static methods

class Calculator {
  // nobody else but this class itself can call this method.
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); This line will give an error;

// console.log(Calculator.add(2, 3));

// Getters and Setters

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    // the "_" for salary is just a convention
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error('Invalid Salary');
    } else {
      this._salary = value;
    }
  }
}

// let emp1 = new Employee('Alice', 150_000);
// We do not put () after salary because getters and setters are special methods and do not require them
// console.log(emp1.name, emp1.salary);
// emp1.salary = -50000;

class SecureAccount {
  #balance;

  constructor(amount) {
    this.balance = amount;
  }

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    this.#balance = amount < 0 ? 0 : amount;
  }
}

const account = new SecureAccount(500);
console.log(account.balance); // 500 (Works via the getter)
// using the setter;
account.balance = -120;
console.log(account.balance);
account.balance = 400;
console.log(account.balance);
