const fs = require("fs");
const inquirer = require("inquirer");

const manager = {
  constructor() {
    inquirer
      //collecting data from user
      .prompt([
        {
          type: "input",
          message:
            "Please Build your team. \n What is the team manager's name?",
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
      .then((answers) => {
        console.log(answers);
        const { name, id, email, phone } = answers;

        if (answers.Engineer) {
          Engineer();
        }
        if (answers.Intern) {
          Intern();
        }

        //need an if statement for ending the program if there are no more teammates to add -- how to?

        fs.writeFile("./dist/manager.js", generateProfiles, (err) =>
          err
            ? console.log(err)
            : console.log("Success! Worker profiles have been generated.")
        );
      });
  },
};

// class Profile {
//   constructor(name, id, email, phone, position) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.phone = phone;
//     this.position = position;
//   }
//   getProfile(){

//   }
//   printProfile(){
//     console.log(`
//     name: ${this.name}
//     id: ${this.id}
//     email: ${this.email}
//     phone: ${this.phone}
//     position: ${this.position}
//     `)
//   }
// }

// const frodo = new Profile ("Frodo Baggins", 12, "ringbearer@middleware.com", 9995557447, "Intern");

// const bilbo = new Profile ("Bilbo Baggins", 13, "ringbearer1@middleware.com", 999, "Engineer");

// frodo.printProfile();
// bilbo.printProfile();

// console.log(frodo instanceof Profile);

// module.exports = Profile;
