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

let account = new BankAccount();
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
