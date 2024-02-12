class Customer {
  //   CustomerID;
  //   Name;
  //   PhoneNumber;
  //   Address;
  //   AccountNumber;
  //   balance;

  constructor(CustomerID, Name, PhoneNumber, Address, AccountNumber, balance) {
    //   this.CustomerID = CustomerID;
    //   this.Name = Name;
    //   this.PhoneNumber = PhoneNumber;
    //   this.Address = Address;
    //   this.AccountNumber = AccountNumber;
    this.balance = balance;
  }

  setDeposit(depositMoney) {
    this.balance += depositMoney;
    console.log(` Successfully Deposited : The Balance is ${this.balance}`);
  }
  setWithdraw(withdrawMoney) {
    this.balance -= withdrawMoney;
    console.log(`Successfully Withdraw : The Balance is ${this.balance}`);
  }
  openAccount() {
    console.log("Successfully Open Account");
  }
  closeAccount() {
    console.log("Don't Close the Account Any Complain Go to near branch");
  }
  applyForLoan(a) {
    if (a <= 50000) {
      console.log("Can't get Loan ; Minimum Loan Rs.50,000");
    } else {
      console.log("Successfully apply the LOAN");
    }
  }
}

const p1 = new Customer(
  123456789,
  "Siva",
  "Mobile Number : +9477123456",
  "80, Vavuniya",
  "Account No : 123456789",
  0
);

p1.setDeposit(10000);
// p1.setWithdraw(10000);
// p1.openAccount();
// p1.closeAccount();
p1.setWithdraw(2000);
