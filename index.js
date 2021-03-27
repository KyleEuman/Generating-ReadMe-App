// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
 {          type: 'input',
            name: 'Project Title',
            message: 'What is the Project Title',
}

{          type: 'input'
           name: 
           message: 
}

{          type: 'input'
           name: 
           message: 
}

{          type: 'input'
           name: 
           message: 
}

{          type: 'list'
           name: 
           message: 
}

{          type: 'input'
           name: 
           message: 
}

{          type: 'input'
           name: 
           message: 
}

{          type: 'input'
           name: 
           message: 
}

{          type: 'input'
           name: 
           message: 
}

{          type: 'input'
           name: 
           message: 
}

{          type: 'input'
           name: 
           message: 
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
