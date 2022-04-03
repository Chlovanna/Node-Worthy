// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Title of Project:",
    },
    {
      type: "input",
      message: "Description",
      name: "description",
    },
    {
      type: "input",
      message: "Table of Contents:",
      name: "tableOfContents",
    },
    {
      type: "input",
      message: "Installation instructions:",
      name: "install",
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage",
    },
    {
      type: "input",
      message: "Credits:",
      name: "credits",
    },
    {
      type: "input",
      message: "License:",
      name: "license",
      choices: ["MIT"],
    },
    {
      type: "input",
      message: "Tests:",
      name: "tests",
    },
    {
      type: "input",
      message: "Contact for Questions:",
      name: "questions",
    },
    {
      type: "input",
      message: "GitHub User Name:",
      name: "gitHub",
    },
  ])
  // TODO: Create a function to write README file
  .then((data) => {
    const README = generateMarkdown(data);

    fs.writeFile("README.md", README, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// const questions = [];

// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
