const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber,) {
    
//use `super` to get name, id, and email from Employee. using super means I don't need the functions outlined in the employee parent class -- super gets access to those methods.
    super(name, id, email);
    this.officeNumber = officeNumber;
  }


  //find these methods in Employee parent class:
  // getName();
  // getId();
  // getEmail();
  //getRole is overridden to return "Manager" = return this.role = "Manager"
}

    module.exports = Manager;