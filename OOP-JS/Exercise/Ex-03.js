class BankAccount{
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    deposit(dep) {
        this.balance = this.balance + dep;
        console.log(`Deposit Successfully $${this.balance} to ${this.accountNumber}`);

    }
    withdraw(wit) {
        if (this.balance > wit) {
            this.balance = this.balance - wit;
            console.log(`Withdraw Successfully $${this.balance} from $${this.accountNumber}`);
            
        }
        else {
            console.log("");
            console.log(`your withdraw amount is $${wit}`);
            console.log(`Insufficient Balance $${wit-this.balance}`);
        }
    }
    displayBalance() {
        console.log(`Your Balance is : $${this.balance}`);
    }
}


const account = new BankAccount("123-456-789", 1000);

account.deposit(500);
account.displayBalance();

account.withdraw(4000);
account.displayBalance();
