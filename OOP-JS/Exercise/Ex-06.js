class Bank{
    constructor() {
        this.name = "";
        this.branch = [];
    }
    addBranch(branch) {
        this.branch.push(branch);
        console.log(`${branch} is Successfully Added`);
    }
    removeBranch(branch) {
        var index = this.branch.indexOf(branch);
        if (index !== -1) {
            this.branch.splice(index, 1);
            console.log(`${branch} Successfully Removed`);
        }
        else {
            console.log(`${branch} does not exist`);
        }
    }
    display() {
        if (this.branch.length === 0) {
            console.log(` No Branches Available`);
        }
        else {
            console.log(`List of Branches`);
            this.branch.forEach((branch, index ) => {
                console.log("Branches", index + 1, branch);
            });
        }
    }
}

const bank = new Bank();

bank.addBranch("Branch V");
bank.addBranch("Branch B");
bank.addBranch("Branch C");
bank.addBranch("Branch D");
bank.addBranch("Branch E");

bank.removeBranch("Branch B");
bank.removeBranch("Branch E");

bank.display();