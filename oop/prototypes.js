'use strict';
let computer = { CPU: 12 };
let lenovo = { screen: 'HD', __proto__: computer };
let tomHardware = {};

// console.log(lenovo);
// console.log(lenovo.__proto__);

let genericCar = { tyres: 4 };
let tesla = { driver: 'AI' };

// we can use setPrototypeOf/getPrototypeOf instead of __proto__.
// __proto__ is the ancient way of getting/setting properties
// setPrototypeOf/getPrototypeOf is the modern way of doing the same
Object.setPrototypeOf(tesla, genericCar);
console.log(Object.getPrototypeOf(tesla));
