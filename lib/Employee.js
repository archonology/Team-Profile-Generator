// const Manager = require("./Manager");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    //when I test it it is undefined, but when I log it, it works?
    console.log(this.name);
    console.log(this.id);
    console.log(this.email);
  }
    // getName(){
    //   console.log(`Employee's name is ${name}.`)
    // };
    // getId(){
    //   console.log(`Employee's id is ${id}.`)
    // };
    // getEmail(){
    //   console.log(`Employee's email is ${email}.`)
    // };
    //getRole should return "Employee". the other classes will override getRole with the inputted roles (intern and engineer).
    // getRole();
  }

  // console.log(frodo.id);
  // const Bilbo = new Employee("Bilbo", 111, "b@email",);

// console.log("---EMPLOYEE---")
// getName();
// getID();
// getEmail();

// const team = [
//   new Manager(name, id, email, officePhone)
// ]

module.exports = Employee;
