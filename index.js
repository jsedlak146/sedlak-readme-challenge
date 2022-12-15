//packages needed

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const { inherits } = require("util");

//array of questions for the user input

const question = [
  {
    type: "input",
    message: "What is your GitHub name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your Email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project name?",
    name: "projectname",
  },
  {
    type: "input",
    message: "Please enter a short description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please describe the installation of your project",
    name: "install",
  },
  {
    type: "input",
    message: "Please describe how to use your project",
    name: "usage",
  },
  {
    type: "list",
    message: "What licenses does your project use?",
    name: "license",
    choices: ["Apache", "Boost", "BSD-3", "GNU", "MIT"],
  },
  {
    type: "input",
    message: "Who are the contributors?",
    name: "contributors",
  },
  {
    type: "input",
    message: "What tests have you ran?",
    name: "tests",
  },
  {
    type: "input",
    message: "Questions for the creator?",
    name: "questions",
  },
];

//function to write readme file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
//function to initialize app
function init() {
  inquirer.prompt(question).then((response) => {
    console.log("ReadMe creation in progress!");
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
}

//function call to initialize app
init();
