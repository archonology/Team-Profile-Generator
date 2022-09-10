const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //checking out info -- delete printEmp before turning in project
    printTeammate() {
      console.log(`
      name: ${this.name}
      id: ${this.id}
      email: ${this.email}`);
    }

    getName();
    getId();
    getEmail();
    //getRole should return "Employee". the other classes will override getRole with the inputted roles (intern and engineer).
    getRole();
  }


const employee = new Employee();

module.exports = Employee;
