const fs = require("fs");
const inquirer = require("inquirer");

class Profile {
  constructor(name, id, email, phone, position) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.positionHeld = position;

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
          message: "What is the their position?",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((answers) => {
        console.log(answers);
        const { name, id, email, phone, position } = answers;

        const generateProfiles = `
${this.name}
${this.id}
${this.email}
${this.phone}`;

        //writes the readme file and notifies user whether it was successful or not
        fs.writeFile("generateProfiles.js", generateProfiles, (err) =>
          err
            ? console.log(err)
            : console.log("Success! Worker profiles have been generated.")
        );
      });
  }
}
module.exports = generateProfiles;
