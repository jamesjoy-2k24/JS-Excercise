class Bank {
  BankID;
  Name;
  Location;

  constructor(bank_id, name, location) {
    this.BankID = bank_id;
    this.Name = name;
    this.Location = location;
  }
  getName() {
    console.log("Name is", this.Name);
  }
  getLocation() {
    console.log("Location is", this.Location);
  }
}

const com = new Bank(127001, "Commercial Bank", "Vavuniya");

com.getName();
com.getLocation();
