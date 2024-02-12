class Person {
  constructor(Name, age, University, Course) {
    this.name = Name;
    this.age = age;
    this.university = University;
    this.course = Course;
  }

  // getName() {
  //     console.log(this.name)
  // }
  // getAge() {
  //     console.log(this.age);
  // }
  setName() {
    console.log("Name is", this.name);
  }
  setAge(age) {
    this.age = age;
    console.log("Age is", this.age);
  }
  setUni(university) {
    this.uni = university;
    console.log("University Is", this.uni);
  }
  setCourse(course) {
    this.course = course;
    console.log("The course is", this.course);
  }
}

const person1 = new Person("Joy", 23, "hjhdf", "jkhfdkjf");

person1.setName();
// person1.setAge(22);
// person1.setUni("Nothing");
// person1.setCourse("Nill");
