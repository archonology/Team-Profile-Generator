const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

inquirer
//collecting data from user -- there can only be one manager. manager function needs to terminate after manager added.
.prompt([
  {
    type: "input",
    message:
      "Welcome! Please Build your team. \n What is the team manager's name?",
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
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add another teammate",
    ],
  },
])
//in these areas I need to have the call to the lib files -- to get the inquirer input into the functions and objects in those files, which then get written into the html index.
.then((answers) => {
  console.log(answers);
  const { name, id, email, phone } = answers;

  if (answers.Engineer) {
    inquirer
    .prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the engineer's employee ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What is the engineer's email address?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the engineer's work phone number?",
          name: "phone",
        },
        {
          type: "input",
          message: "What is the engineer's gitHub handle?",
          name: "github",
        },
        {
          type: "list",
          name: "position",
          message: "Would you like to add another teammate?",
          choices: ["Engineer", "Intern", "I don't want to add any more teammates"],
        },
    ]);
  if (answers.Intern) {
    inquirer
    .prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the intern's employee ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What is the intern's email address?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the intern's work phone number?",
          name: "phone",
        },
        {
          type: "input",
          message: "What is the intern's school?",
          name: "school",
        },
        {
          type: "list",
          name: "position",
          message: "Would you like to add another teammate?",
          choices: ["Engineer", "Intern", "I don't want to add any more teammates"],
        },
    ]);
  } else {

  //need an if statement for ending the program if there are no more teammates to add -- how to?

  //this has to write the html if there is only a manager on the team.

  fs.writeFile("./dist/index.html", makeTeam, (err) =>
    err
      ? console.log(err)
      : console.log("Success! Team page has been generated.")
  );
}
  }
});


