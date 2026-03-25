'use strict';
let computer = { CPU: 12 };
let lenovo = { screen: 'HD', __proto__: computer };
let tomHardware = {};

console.log(lenovo);
console.log(lenovo.__proto__);

let genericCar = { tyres: 4 };
let tesla = { driver: 'AI' };

// we can use setPrototypeOf/getPrototypeOf instead of __proto__.
// __proto__ is the ancient way of getting/setting properties
// setPrototypeOf/getPrototypeOf is the modern way of doing the same
Object.setPrototypeOf(tesla, genericCar); // same as tesla = {driver: 'AI', __proto__: genericCar}

console.log(Object.getPrototypeOf(tesla));

// Another way to sort of add prototypes

// const functionBundle = {
//   addMoney: function () {
//     this.accountBalance++;
//   },
//   fetchBalance: function () {
//     console.log(`The balance is ${this.accountBalance}`);
//   },
// };

function CreateCustomer(name, accountBalance, branch) {
  // const customer = Object.create(functionBundle);
  this.name = name;
  this.accountBalance = accountBalance;
  this.branch = branch;
}

CreateCustomer.prototype.fetchBalance = function () {
  return `The account balance is ${this.accountBalance}`;
};

CreateCustomer.prototype.addMoney = function () {
  return this.accountBalance++;
};

const customer1 = new CreateCustomer('Allan', 10_000_000_000, 'Malad West');
customer1.addMoney();
customer1.addMoney();
customer1.fetchBalance();
console.table(customer1);
