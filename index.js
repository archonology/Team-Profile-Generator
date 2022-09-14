const fs = require("fs");
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

function initializeTeam() {
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
      const printHtml = `<!DOCTYPE html>
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
        <!-- This HTML is solely for formatting the template literates. -->
        <body>
          <header>
            <h1>My Development Team</h1>
          </header>
          <main>
            <div class="container">
              <div class="row d-flex justify-content-center">
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
                      <a href="mailto:reed.meher@gmail.com">${manager.email}</a>
                    </div>
                    <div id="card-info">
                      <h5>Phone #</h5>
                      <p>${manager.officeNumber}</p>
                    </div>
                  </div>
                </div>`;
      // console.log(printHtml);
      theTeam.push(printHtml);
      console.log(theTeam);

      console.log(answers.role);
      if (answers.role === "Engineer") {
        addEngineer();
      }
      if (answers.role === "Intern") {
        addIntern();
      }
      if (answers.role === "No, thanks!") {
        const endTeamPage = `</main>
    <script src="../lib/Employee.js"></script>
  </body>
</html>`;
        theTeam.push(endTeamPage);
        fs.writeFile("./dist/index.html", theTeam, (err) =>
          err
            ? console.log(err)
            : console.log("Success! Team page has been generated.")
        );
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      //if/when Engineer is selected, these questions are collected:
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
        when(answers) {
          return answers.role === "Engineer";
        },
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
      //need the template literate for the engineerCard?
      const engineerCard = `<div class="card col-sm shadow-lg mb-5 rounded">
      <h3>${engineer.name}</h3>
      <h4>
        <i class="fa fa-sitemap" style="font-size: 24px"></i> Engineer
      </h4>
      <div class="card-body rounded">
        <div id="card-info">
          <h5>Employee ID</h5>
          <p>${engineer.id}</p>
        </div>
        <div id="card-info">
          <h5>Email</h5>
          <a href="mailto:reed.meher@gmail.com">${engineer.email}</a>
        </div>
        <div id="card-info">
          <h5>Phone #</h5>
          <p>${engineer.officeNumber}</p>
        </div>
        <div id="card-info">
          <h5>GitHub</h5>
          <a class="gitHub" href="#">${engineer.github}</a>
        </div>
      </div>
    </div>`;
      console.log(engineerCard);
      theTeam.push(engineerCard);
      console.log(theTeam);
      console.log(answers.role);
      if (answers.role === "Engineer") {
        addEngineer();
      }
      if (answers.role === "Intern") {
        addIntern();
      }
      if (answers.role === "Nope, the team is complete!") {
        const endTeamPage = `</main>
    <script src="../lib/Employee.js"></script>
  </body>
</html>`;
        theTeam.push(endTeamPage);
        fs.writeFile("./dist/index.html", theTeam, (err) =>
          err
            ? console.log(err)
            : console.log("Success! Team page has been generated.")
        );
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
      const internCard = `<div class="card col-sm shadow-lg mb-5 rounded">
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
      console.log(internCard);
      theTeam.push(internCard);
      console.log(theTeam);

      if (answers.role === "Engineer") {
        addEngineer(theEngineers);
      }
      if (answers.role === "Intern") {
        addIntern(theInterns);
      }
      if (answers.role === "Nope, the team is complete!") {
        const endTeamPage = `</main>
    <script src="../lib/Employee.js"></script>
  </body>
</html>`;
        theTeam.push(endTeamPage);
        fs.writeFile("./dist/index.html", theTeam, (err) =>
          err
            ? console.log(err)
            : console.log("Success! Team page has been generated.")
        );
      }
    });
}

// const makeTeam = `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link
//       rel="stylesheet"
//       href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
//       integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
//       crossorigin="anonymous"
//     />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//     />
//     <link rel="stylesheet" href="./style.css" />
//     <title>Team Generator</title>
//   </head>
//   <!-- This HTML is solely for formatting the template literates. -->
//   <body>
//     <header>
//       <h1>My Development Team</h1>
//     </header>
//     <main>
//       <div class="container">
//         <div class="row d-flex justify-content-center">
//           <div class="card col-sm shadow-lg mb-5 rounded">
//             <h3>${manager.name}</h3>
//             <h4>
//               <i class="fa fa-refresh" style="font-size: 24px"></i>
//               Manager
//             </h4>
//             <div class="card-body rounded">
//               <div id="card-info">
//                 <h5>Employee ID</h5>
//                 <p>${manager.id}</p>
//               </div>
//               <div id="card-info">
//                 <h5>Email</h5>
//                 <a href="mailto:reed.meher@gmail.com">${manager.email}</a>
//               </div>
//               <div id="card-info">
//                 <h5>Phone #</h5>
//                 <p>${manager.officeNumber}</p>
//               </div>
//             </div>
//           </div>
//           <div class="card col-sm shadow-lg mb-5 rounded">
//             <h3>${engineer.name}</h3>
//             <h4>
//               <i class="fa fa-sitemap" style="font-size: 24px"></i> Engineer
//             </h4>
//             <div class="card-body rounded">
//               <div id="card-info">
//                 <h5>Employee ID</h5>
//                 <p>${engineer.id}</p>
//               </div>
//               <div id="card-info">
//                 <h5>Email</h5>
//                 <a href="mailto:reed.meher@gmail.com">${engineer.email}</a>
//               </div>
//               <div id="card-info">
//                 <h5>Phone #</h5>
//                 <p>${engineer.officeNumber}</p>
//               </div>
//               <div id="card-info">
//                 <h5>GitHub</h5>
//                 <a class="gitHub" href="#">${engineer.github}</a>
//               </div>
//             </div>
//           </div>
//           <div class="card col-sm shadow-lg mb-5 rounded">
//             <h3>${intern.name}</h3>
//             <h4>
//               <i class="fa fa-user-plus" style="font-size: 24px"></i> Intern
//             </h4>
//             <div class="card-body rounded">
//               <div id="card-info">
//                 <h5>Employee ID</h5>
//                 <p>${intern.id}</p>
//               </div>
//               <div id="card-info">
//                 <h5>Email</h5>
//                 <a href="mailto:reed.meher@gmail.com">${intern.email}</a>
//               </div>
//               <div id="card-info">
//                 <h5>Phone #</h5>
//                 <p>${intern.officeNumber}</p>
//               </div>
//               <div id="card-info">
//                 <h5>School</h5>
//                 <p>${intern.school}</p>
//               </div>
//             </div>
//           </div>
//                   <div class="card col-sm shadow-lg mb-5 rounded">
//                     <h3>Peregrin Took</h3>
//                     <h4>
//                       <i class="fa fa-user-plus" style="font-size: 24px"></i> Intern
//                     </h4>
//                     <div class="card-body rounded">
//                       <div id="card-info">
//                         <h5>Employee ID</h5>
//                         <p>22</p>
//                       </div>
//                       <div id="card-info">
//                         <h5>Email</h5>
//                         <a href="mailto:reed.meher@gmail.com">pip@middleware.net</a>
//                       </div>
//                       <div id="card-info">
//                         <h5>Phone #</h5>
//                         <p>999-555-5555</p>
//                       </div>
//                       <div id="card-info">
//                         <h5>School</h5>
//                         <p>U of MN Bootcamp</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="card col-sm shadow-lg mb-5 rounded">
//                     <h3>Merridoc Brandybuck</h3>
//                     <h4>
//                       <i class="fa fa-user-plus" style="font-size: 24px"></i> Intern
//                     </h4>
//                     <div class="card-body rounded">
//                       <div id="card-info">
//                         <h5>Employee ID</h5>
//                         <p>22</p>
//                       </div>
//                       <div id="card-info">
//                         <h5>Email</h5>
//                         <a href="mailto:reed.meher@gmail.com">merry@middleware.net</a>
//                       </div>
//                       <div id="card-info">
//                         <h5>Phone #</h5>
//                         <p>999-555-5555</p>
//                       </div>
//                       <div id="card-info">
//                         <h5>School</h5>
//                         <p>U of MN Bootcamp</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//     </main>
//     <script src="../lib/Employee.js"></script>
//   </body>
// </html>
//         `;

//         console.log(`from the prompts, data check:
//         Manager:
//         name:${answers.manager.name}
//         id:${answers.manager.id}
//         email:${answers.manager.email}
//         officeNumber:${answers.manager.officeNumber}
//         Engineer:
//         name:${answers.engineer.name}
//         id:${answers.engineer.id}
//         email:${answers.engineer.email}
//         officeNumber:${answers.engineer.officeNumber}
//         Intern:
//         name:${answers.intern.name}
//         id:${answers.intern.id}
//         email:${answers.intern.email}
//         officeNumber:${answers.intern.officeNumber}`)

//         fs.writeFile("./dist/index.html", makeTeam, (err) =>
//           err
//             ? console.log(err)
//             : console.log("Success! Team page has been generated.")
//         );

//     });
//   }
// //looking for how to push these answers to the different lib files...

initializeTeam();
