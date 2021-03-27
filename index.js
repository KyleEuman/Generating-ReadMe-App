// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [
 {          type: 'input',
            name: 'Project Title',
            message: 'What is the Project Title?'

 },
{          type: 'input',
           name: 'description',
           message: 'Write a brief discription of your project'
},

{          type: 'input',
           name: 'installation',
           message: 'Describe the installation process if any'
},

{          type: 'input',
           name: 'usage',
           message: 'What is the project usage for?'
},

{          type: 'list',
           name: 'licesnse',
           message: 'choose the appropriate license for this project'
},

{          type: 'input',
           name: 'contributing',
           message: 'Who are the contributers of this project?'
},

{          type: 'input',
           name: 'tests',
           message: 'Is there a test included?'
},

{          type: 'input',
           name: 'questions',
           message: 'What do I do if I have an issue?'
},

{          type: 'input',
           name: 'username',
           message: 'Please enter yout github username:'
},

{          type: 'input',
           name: 'email',
           message: 'Please entewr your email:'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
