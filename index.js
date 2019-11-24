const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub Username?"
      },
      {
        type: "input",
        name: "color",
        message: "What is your favorite color?"
      }
  
    ]);
  }

  