'use strict';

// LSP states that, If S is a subtype of T, then objects of type T should be replaceable with objects of type S without breaking the behavior of the program.

// A child class should be able to stand in for its parent class and everything should still work correctly.

class Bird {}

class FlyingBird extends Bird {
  fly() {
    console.log('Flying...');
  }
}

class Ostrich extends Bird {
  walk() {
    console.log('Walking...');
  }
}

class Sparrow extends FlyingBird {
  fly() {
    console.log('Sparrow flying!');
  }
}
