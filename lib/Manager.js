const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber,) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getName();

  getId();

  getEmail();

  //getRole is overridden to return "Manager" = return this.role = "Manager"
}

    module.exports = Manager;