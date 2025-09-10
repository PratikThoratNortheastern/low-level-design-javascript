'use strict';

class BankAccount {
  #balance; // private field

  constructor(accOwner, initialBalance) {
    this.accOwner = accOwner;
    this.#balance = initialBalance;
  }

  // Deposit money into the account
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(
        `Deposit of ${amount} has been added. New balance: ${this.#balance}`
      );
    } else {
      console.log(`Invalid deposit amount: ${amount}`);
    }
  }

  // Withdraw money from the account
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(
        `Withdrawal of ${amount} successful. New balance: ${this.#balance}`
      );
    } else {
      console.log(
        `Withdrawal of ${amount} failed. Insufficient funds or invalid amount.`
      );
    }
  }

  // Get current balance
  getBalance() {
    return this.#balance;
  }

  // Bonus: Transfer money to another BankAccount
  transfer(amount, anotherAccount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log('Invalid account to transfer to');
      return;
    }

    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      anotherAccount.deposit(amount);
      console.log(
        `Transferred ${amount} to ${
          anotherAccount.accOwner
        }. Your new balance: ${this.#balance}`
      );
    } else {
      console.log('Transfer failed. Insufficient funds or invalid amount.');
    }
  }
}

// Test Cases
const acc1 = new BankAccount('Alice', 500);
const acc2 = new BankAccount('Bob', 300);

console.log(acc1.getBalance()); // 500
acc1.deposit(400); // Deposit of 400. New balance: 900
acc1.withdraw(300); // Withdrawal of 300 successful. New balance: 600
acc1.withdraw(1000); // Withdrawal failed. Insufficient funds or invalid amount.
console.log(acc1.getBalance()); // 600

acc1.transfer(200, acc2); // Transfer successful
console.log(acc1.getBalance()); // 400
console.log(acc2.getBalance()); // 500
