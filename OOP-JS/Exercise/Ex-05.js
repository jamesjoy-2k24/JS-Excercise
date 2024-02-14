//Parent Class Employee
class Employee{
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateAnnualSalary(employee1) {
        this.employee1 = employee1;
        console.log(`Name of the Employee : ${this.name}`);
        console.log(`Monthly Salary       : $${this.salary} `);
        // console.log(`The Bonus is $${this.balance + (this.salary * 0.1)}`);
    }
    calculateAnnualSalary(employee2) {
        this.employee2 = employee2;
        console.log(`Name of the Employee : ${this.name}`);
        console.log(`Monthly Salary       : $${this.salary} `);
        console.log(`The Bonus is ${this.balance + (this.salary * 0.1)}`);
    }

}

//Child Class Manager
// class Manager extends Employee{
//     constructor(name, salary, department) {
//         super(name, salary);
//         this.department = department;
//     }
//     calculateAnnualSalary() {
//         console.log(`Manager       : ${this.name}`);
//         console.log(`Department    : ${this.department}`);
//         console.log(`Annual Salary : $${this.salary}`);
//     }
//     calculateAnnualSalary() {
//         console.log(`Manager       : ${this.name}`);
//         console.log(`Department    : ${this.department}`);
//         console.log(`Annual Salary : $${this.salary + (this.salary * 0.1)}`);
//     }

// }


const employee1 = new Employee("Angela Lucas", 5000);
const employee2 = new Employee("Jonelle Rozaliya", 5000);

// const manager1 = new Manager("Angela Lucas", 66000, "Marketing");
// const manager2 = new Manager("Jonelle Rozaliya", 66000, "Marketing");

employee1.calculateAnnualSalary();
employee2.calculateAnnualSalary();
// manager1.calculateAnnualSalary();
// manager2.calculateAnnualSalary();

