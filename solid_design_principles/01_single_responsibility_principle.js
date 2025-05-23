'use strict';

// single responsibility principle
/**
 * As per this principle, our class only should only have one reason to change. Only 1.
 * Basically our classes and functions should be doing only 1 thing at a time.
 * It is like how a Front End Engineer won't touch the backend and vice versa. Single responsibility.
 */

// Employee Salary Function

// function calculateSalary(employeeRate, hoursWorked) {
//   let weeklyHours = hoursWorked;
//   const monthlyPay = employeeRate * weeklyHours * 4;
//   return monthlyPay;
// }

// const empSal = calculateSalary(55, 40);
// console.log(empSal);

class User {
  constructor(name, email) {
    this.email = email;
    this.name = name;
  }
}

class UserRepository {
  constructor() {
    this.users = []; //local DB
  }

  save(user) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    console.log(`Welcome email sent to ${user.email}`);
  }
}

// Usage
const userRepo = new UserRepository();
const emailService = new EmailService();

const user1 = new User('Alice', 'alice@example.com');

const savedUser = userRepo.save(user1);
emailService.sendWelcomeEmail(user1);

console.log('User details saved', savedUser);
console.log('All users:', userRepo.findAll());
