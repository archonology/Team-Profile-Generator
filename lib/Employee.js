const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email, phone, role) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //checking out info -- delete printEmp before turning in project
    printEmp() {
      console.log(`
      name: ${this.name}
      id: ${this.id}
      email: ${this.email}`);
    }

    getName();
    getId();
    getEmail();
    //getRole should return "Employee"
    getRole();
  }


const employee = new Employee();

module.exports = Employee;
