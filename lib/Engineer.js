const inquirer = require("inquirer");
const Employee = require("Employee");

class Engineer extends Employee {
  constructor(name, id, email, phone, github) {
    super(name, id, email);
    this.phone = phone;
    this.github = github;
  }
 
  // getName();
  // getId();
  // getEmail();
  //getRole is overridden to return "Engineer" = return this.role = "Engineer"
}
    

    module.exports = Engineer;