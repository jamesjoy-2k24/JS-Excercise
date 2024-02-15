class Employee{
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateAnnualSalary() {
        console.log(`Employee Name : ${this.name}`);
        console.log(`Salary        : $${this.salary*12}`);
    }
}

class Manager extends Employee{
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
        
    }
    calculateAnnualSalary() {
        console.log(`Manager Name : ${this.name} \nDepartment   : ${this.department} \nSalary       : $${this.salary*12} \nBonus        : $${this.salary*0.1}`);
    }
}

const employee = new Employee("John", 20000);
const manager = new Manager("Joy", 30000, "Service");

employee.calculateAnnualSalary();
manager.calculateAnnualSalary();