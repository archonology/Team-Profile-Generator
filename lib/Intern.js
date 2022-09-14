const Employee = require("./Employee");

class Intern extends Employee  {
  constructor(name, id, email, officeNumber, school) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.school = school;
    this.role = "Intern"
  }

  //getRole is overridden to return "Intern" = return this.role = "Intern"
}

    module.exports = Intern;