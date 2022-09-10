const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
  constructor() {
    inquirer
      //collecting data from user
      .prompt([
        {
          type: "input",
          message: "What is the team member's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is their employee ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What is their email address?",
          name: "email",
        },
        {
          type: "input",
          message: "What is their work phone number?",
          name: "phone",
        },
        {
          type: "list",
          name: "position",
          message: "Would you like to add another teammate?",
          choices: ["Engineer", "Intern", "I don't want to add any more teammates"],
        },
      ])
      .then((answers) => {
        console.log(answers);
        const { name, id, email, phone, position } = answers;

        const generateProfiles = (`
        name: ${name}
        id: ${id}
        email: ${email}
        phone: ${phone}
        position: ${position}
        `)

        if(answers.Engineer){
          Engineer();
        }
        if(answers.Intern){
          Intern();
        }
      
        //writes to the dist folder...
        fs.writeFile("./dist/employee.js", generateProfiles, (err) =>
          err
            ? console.log(err)
            : console.log("Success! Worker profiles have been generated.")
        );
      });
    }
}

const employee = new Employee()

module.exports = Employee;
