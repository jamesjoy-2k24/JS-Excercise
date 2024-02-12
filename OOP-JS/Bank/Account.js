class Account{
    AccountID;
    CustomerID;

    constructor(AccountID, CustomerID) {
        this.AccountID = AccountID;
        this.CustomerID = CustomerID;
    }
    getAccountID() {
        console.log(`The Account ID is : ${this.AccountID}`);
    }
    getCustomerID() {
        console.log(`The Customer ID is : ${this.CustomerID}`);
    }
}

var customer = new Account("123-256-5555", 1236549870);

customer.getAccountID();
customer.getCustomerID();