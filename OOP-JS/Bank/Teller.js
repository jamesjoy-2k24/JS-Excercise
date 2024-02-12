class Teller{
    ID;
    Name;

    constructor(ID, Name) {
        this.ID = ID;
        this.Name = Name;
    }
    
    collectMoney() {
        console.log("This is Your Money !")
    }
    openAccount() {
        console.log("Go to the Bank");
    }
    issueCard() {
        console.log("Ok Come to the Bank !");
    }
}

const teller = new Teller("ID : 1230546987", "Name : James Bond");

teller.collectMoney();
teller.openAccount();
teller.issueCard();