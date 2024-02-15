class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    console.log(`\n Employee : ${this.name}\n Salary : ${this.salary}`);
  }
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  calculateAnnualSalary() {
    console.log(
      `\n Bonus : 10% of the base Salary \n Manager : ${
        this.name
      }\n Department :${this.department}\n Bonus : ${
        super.calculateAnnualSalary() * 0.1
      }  \n Annual Salary :${
        super.calculateAnnualSalary() + super.calculateAnnualSalary() * 0.1
      }`
    );
  }
}
const emp1 = new Employee("James", 5000);
const manager1 = new Manager("John", 5000, "HR");

emp1.calculateAnnualSalary();
manager1.calculateAnnualSalary();
