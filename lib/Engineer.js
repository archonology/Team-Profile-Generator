const fs = require("fs");
const inquirer = require("inquirer");

// class Profile {
//   constructor(name, id, email, phone, position) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.phone = phone;
//     this.positionHeld = position;

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
          type: "input",
          message: "What is their gitHub handle?",
          name: "github",
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
        const { name, id, email, phone, github } = answers;

        if(answers.Engineer){
          Engineer();
        }
        if(answers.Intern){
          Intern();
        }
    //need an if statement for ending the program if there are no more teammates to add -- how to?

        fs.writeFile("./dist/engineer.js", generateProfiles, (err) =>
        err
          ? console.log(err)
          : console.log("Success! Worker profiles have been generated.")
      );
    });