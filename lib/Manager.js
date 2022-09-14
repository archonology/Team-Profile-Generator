const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber, role) {
//use `super` to get name, id, and email from Employee. using super means I don't need the functions outlined in the employee parent class -- super gets access to those methods.
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager"
  }

  //find these methods in Employee parent class:
  // getName();
  // getId();
  // getEmail();
  // getOfficeNumber();
  //getRole is overridden to return "Manager" = return this.role = "Manager"
}
// const jim = new Manager("Jim", 22, "jim@email", 8888);
// console.log(jim);
module.exports = Manager;