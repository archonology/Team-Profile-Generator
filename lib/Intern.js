const inquirer = require("inquirer");
const Employee = require("Employee");

class Intern extends Employee  {
  constructor(name, id, email, phone, school) {
    this.role = "Intern";
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.school = school;
  }
  getName();

  getId();

  getEmail();

  //getRole is overridden to return "Intern" = return this.role = "Intern"
}

    module.exports = Intern;