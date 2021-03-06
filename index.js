// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("generateMarkdown")


// TODO: Create an array of questions for user input
inquirer.prompt( [
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
   ]
)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err)  {
            return console.log(err);
        }
        console.log('Congratulations you have successfully created your Readme' )
    })

}
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
