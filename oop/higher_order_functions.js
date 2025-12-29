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
