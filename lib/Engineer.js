const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, officeNumber, github) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.github = github;
    this.role = "Engineer"
  }
 
  //getRole is overridden to return "Engineer" = return this.role = "Engineer"
}
    

    module.exports = Engineer;