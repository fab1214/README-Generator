const inquirer = require("inquirer");

//User prompt function
const promptUser = () => {
  return inquirer.prompt([
    //question 1
    {
      type: "input",
      name: "name",
      message: "Please enter the title of your project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter a project title.");
          return false;
        }
      },
    },
    //question 2
    {
      type: "input",
      name: "description",
      message: "Enter the description for your project (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You must enter a project description");
          return false;
        }
      },
    },
    //question 3
    {
      type: "checkbox",
      name: "installation",
      message: "",
    },
  ]);
};
