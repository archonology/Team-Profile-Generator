const fs = require("fs");
const chalk = require("chalk");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const jim = new Manager("Jim", 22, "jim@email", 8888);
// console.log(jim);

// const sara = new Engineer("Sara", 01, "sara@email", 8888, "SaraBear");
// console.log(sara);

// const employee = new Employee();

//empty objects to catch the teammates
const theManager = [];
const theEngineers = [];
const theInterns = [];
const theTeam = [];

function init() {
  inquirer
    //collecting data from user -- there can only be one manager. manager function needs to terminate after manager added.
    .prompt([
      {
        type: "input",
        message:
          "Welcome! Please Build your team. \n What is the team manager's name?",
        name: "manager.name",
      },
      {
        type: "input",
        message: "What is their employee ID?",
        name: "manager.id",
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "manager.email",
      },
      {
        type: "input",
        message: "What is their work phone number?",
        name: "manager.officeNumber",
      },
      {
        type: "list",
        name: "role",
        message: "Would you like to add another teammate?",
        choices: [
          "Engineer",
          "Intern",
          new inquirer.Separator(),
          "No, thanks!",
        ],
      },
    ])
    .then((answers) => {
      generateHTML();
      console.log(answers);
      console.log(answers.manager.role);
      const manager = answers.manager;
      const newManager = new Manager(
        manager.name,
        manager.id,
        manager.email,
        manager.officeNumber
      );
      console.log(newManager);
      theManager.push(newManager);
      console.log(theTeam);
      if(new Manager){
      const managerCard = `
      <div class="card col-sm shadow-lg mb-5 rounded">
        <h3>${manager.name}</h3>
        <h4>
          <i class="fa fa-refresh" style="font-size: 24px"></i>
          Manager
        </h4>
        <div class="card-body rounded">
          <div id="card-info">
            <h5>Employee ID</h5>
            <p>${manager.id}</p>
          </div>
          <div id="card-info">
            <h5>Email</h5>
            <a href="mailto:${manager.email}">${manager.email}</a>
          </div>
          <div id="card-info">
            <h5>Phone #</h5>
            <p>${manager.officeNumber}</p>
          </div>
        </div>
      </div>`;
      //append the team cards to the now generated HTML
      fs.appendFile("./dist/index.html", managerCard, (err) => {
        err ? console.log(err) : console.log("Your manager has been added!");
      });
    }
      console.log(answers.role);
      if (answers.role === "Engineer") {
        addEngineer();
      }
      if (answers.role === "Intern") {
        addIntern();
      }
      if (answers.role === "No, thanks!") {
        const finishHTML = ` 
        </div>
        </div>
      </main>
      <script src="../index.js"></script>
    </body>
  </html>`;
        fs.appendFile("./dist/index.html", finishHTML, (err) => {
          err ? console.log(err) : console.log("Your './dist/index.html' page is complete!");
        });
        return "Your team page is complete!";
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "engineer.name",
      },
      {
        type: "input",
        message: "What is their employee ID?",
        name: "engineer.id",
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "engineer.email",
      },
      {
        type: "input",
        message: "What is their work phone number?",
        name: "engineer.officeNumber",
      },
      {
        type: "input",
        message: "What is their GitHub handle?",
        name: "engineer.github",
      },
      {
        type: "list",
        name: "role",
        message: "Would you like to add another teammate?",
        choices: [
          "Engineer",
          "Intern",
          new inquirer.Separator(),
          "Nope, the team is complete!",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers);
      console.log(answers.engineer.name);
      const engineer = answers.engineer;
      const newEngineer = new Engineer(
        engineer.name,
        engineer.id,
        engineer.email,
        engineer.officeNumber,
        engineer.github
      );
      console.log(newEngineer);
      theEngineers.push(newEngineer);
      //append the engineer cards
      if(new Engineer){
      const engineerCards = `
      <div class="card col-sm shadow-lg mb-5 rounded">
      <h3>${engineer.name}</h3>
      <h4>
        <i class="fa fa-refresh" style="font-size: 24px"></i>
        Engineer
      </h4>
      <div class="card-body rounded">
        <div id="card-info">
          <h5>Employee ID</h5>
          <p>${engineer.id}</p>
        </div>
        <div id="card-info">
          <h5>Email</h5>
          <a href="mailto:${engineer.email}">${engineer.email}</a>
        </div>
        <div id="card-info">
          <h5>Phone #</h5>
          <p>${engineer.officeNumber}</p>
        </div>
        <div id="card-info">
        <h5>GitHub</h5>
        <a class="gitHub" href="${engineer.github}">${engineer.github}</a>
        </div>
        </div>
      </div>`;
      fs.appendFile("./dist/index.html", engineerCards, (err) => {
        err ? console.log(err) : console.log("Your engineer has been added!");
      });
    }
      if (answers.role === "Engineer") {
        addEngineer();
      }
      if (answers.role === "Intern") {
        addIntern();
      }
      if (answers.role === "Nope, the team is complete!") {
        const finishHTML = ` 
        </div>
        </div>
      </main>
      <script src="../index.js"></script>
    </body>
  </html>`;
        fs.appendFile("./dist/index.html", finishHTML, (err) => {
          err ? console.log(err) : console.log("Your './dist/index.html' is complete!");
        });
      }
    });
}

function addIntern() {
  inquirer
    .prompt([
      //if/when Intern is selected, these questions are collected:
      {
        type: "input",
        message: "What is their name?",
        name: "intern.name",
      },
      {
        type: "input",
        message: "What is their employee ID?",
        name: "intern.id",
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "intern.email",
      },
      {
        type: "input",
        message: "What is their work phone number?",
        name: "intern.officeNumber",
      },
      {
        type: "input",
        message: "What school do they attend?",
        name: "intern.school",
      },
      {
        type: "list",
        name: "role",
        message: "Would you like to add another teammate?",
        choices: [
          "Engineer",
          "Intern",
          new inquirer.Separator(),
          "Nope, the team is complete!",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers);
      console.log(answers.intern.name);
      const intern = answers.intern;
      const newIntern = new Intern(
        intern.name,
        intern.id,
        intern.email,
        intern.officeNumber,
        intern.school
      );
      console.log(newIntern);
      theInterns.push(newIntern);
      if(new Intern){
      const internCards = `
      <div class="card col-sm shadow-lg mb-5 rounded">
      <h3>${intern.name}</h3>
      <h4>
        <i class="fa fa-user-plus" style="font-size: 24px"></i> Intern
      </h4>
      <div class="card-body rounded">
        <div id="card-info">
          <h5>Employee ID</h5>
          <p>${intern.id}</p>
        </div>
        <div id="card-info">
          <h5>Email</h5>
          <a href="mailto:reed.meher@gmail.com">${intern.email}</a>
        </div>
        <div id="card-info">
          <h5>Phone #</h5>
          <p>${intern.officeNumber}</p>
        </div>
        <div id="card-info">
          <h5>School</h5>
          <p>${intern.school}</p>
        </div>
      </div>
    </div>`;
      fs.appendFile("./dist/index.html", internCards, (err) => {
        err ? console.log(err) : console.log("Your intern has been added!");
      });
    }
      if (answers.role === "Engineer") {
        addEngineer();
      }
      if (answers.role === "Intern") {
        addIntern();
      }
      if (answers.role === "Nope, the team is complete!") {
        const finishHTML = ` </div>
        </div>
      </main>
      <script src="../index.js"></script>
    </body>
  </html>`;
        fs.appendFile("./dist/index.html", finishHTML, (err) => {
          err ? console.log(err) : console.log("Your './dist/index.html' is complete!");
        });
      }
    });
}

function generateHTML() {
  const printHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Generator</title>
  </head>
  <body>
    <header>
      <h1>My Development Team</h1>
    </header>
    <main>
      <div class="container">
        <div class="row d-flex justify-content-center" id="card-zone">
          <!-- append cards here -->`;

  fs.writeFile("./dist/index.html", printHTML, (err) => {
    err ? console.log(err) : console.log("Your team page is being generated!");
  });
}

init();
