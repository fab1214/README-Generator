const fs = require("fs");
const generateReadMe = require("./generatereadme.js");
const inquirer = require("inquirer");

//User prompt function
const promptUser = () => {
  return inquirer.prompt([
    //question 1

    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
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
      type: "input",
      name: "installation",
      message: "Describe the installation process (if any)",
    },
    //question 4
    {
      type: "input",
      name: "usage",
      message: "What is the usage information?",
    },
    //question 5
    {
      type: "input",
      name: "contribution",
      message: "What are the contribution guidelines?",
    },
    //question 6
    {
      type: "input",
      name: "testing",
      message: "What are the test instructions?",
    },
    //question 7
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    //question 8
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    //question 9
    {
      type: "list",
      name: "license",
      message: "What license did you use for this project?",
      choices: ["Apache", "Boost", "MIT", "Mozilla", "Perl", "IBM"],
    },
  ]);
};


//run function promptUser
promptUser()
  //pass promptUser data as parameter
  .then((userData) => {
    // TODO: Create a function to write README file
    const markdown = generateReadMe(userData);
    fs.writeFile("./dist/README.md", markdown, err => {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  });
