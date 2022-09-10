const inquirer = require("inquirer");
const Employee = require("Employee");

class Intern extends Employee  {
  constructor(name, id, email, phone, school) {
    super(name, id, email);
    this.phone = phone;
    this.school = school;
  }

  // getName();
  // getId();
  // getEmail();
  //getRole is overridden to return "Intern" = return this.role = "Intern"
}

    module.exports = Intern;