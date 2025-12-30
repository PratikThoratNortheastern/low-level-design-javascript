'use strict';

function makeTea(typeOfTea) {
  return `makeTea: ${typeOfTea}`;
}

function processOrder(teaFunction) {
  return teaFunction('earl gray');
}

let order = processOrder(makeTea);
console.log(order);

// We see that functions are passed around as parameters and even returned inside another functions. These functions are essentially higher order functions.
// Functions in Javascript are first class citizens. Meaning they are treated like just any other values.

/**
 * Challenge: Write a function named `createTeaMaker` that returns another function. The return function to take one parameter, `teaType`, and return a message like "Making green tea";
 * Store the returned function value in a variable named `teaMaker`and call it with `"green tea"`
 */

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
console.log(teaMaker('green tea'));
