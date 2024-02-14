class Person{
    constructor(title, name, age, country) {
        this.title = title;
        this.name = name;
        this.age = age;
        this.country = country;

        // console.log("Persons Details");
    }

    displayDetails() {
        console.log("");
        console.log(this.title);
        console.log(`Name : ${this.name}`);
        console.log(`age  : ${this.age}`);
        console.log(`Country : ${this.country}`);
    }
}

const person1 = new Person("Person-1 Details","Joy", 22, "Italy");
const person2 = new Person("Person-2 Details","James", 18, "Lanka");

person1.displayDetails();
person2.displayDetails();
