// Write a JavaScript program that creates a class called BankAccount with properties for account number,
// account holder name, and balance.Include methods to deposit, withdraw, and transfer money between accounts.
// Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing,
// and transferring money.

class BankAccount {
  constructor(accountNumber, holderName, balance) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Successfully Deposit $${amount} to : ${this.accountNumber} Your balance is : $${this.balance}`);
  }
  withdraw(amount) {
    this.balance -= amount;
    console.log(`Successfully Withdraw $${amount} from : ${this.accountNumber} /n Your balance is : $${this.balance}`);
  }
    transfer(account1,amount) {
        this.balance - amount;
        account2.deposit(amount);
        this.balance += amount;
        console.log(`Successfully transfer $${amount} to ${this.accountNumber}`);
  }
}

const account1 = new BankAccount("AC-01-2356", "Joy", 0);
const account2 = new BankAccount("AC-02-3568", "James", 0);


account1.deposit(5000);
account2.transfer(1000);
// account1.withdraw(amount);