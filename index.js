const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

//console.log('readme')
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of the project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instruction:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Contributing:',
      },
      {
          type: 'input',
          name: 'test',
          message: 'Enter instruction to test:',
        },
        {
          type: 'input',
          name: 'github',
          message: 'For questions(github):',
        },
        {
          type: 'input',
          name: 'email',
          message: 'For questions(email):',
        },
        {
          type: 'list',
          name: 'license',
          message: 'Choose your license:',
          choices: ['MIT', 'ISC', 'GNUPLv3'],
        }

];


// function to initialize program
function init() {
  return inquirer.prompt(questions)
  .then((answers)=>{
    const markDown = generateMarkdown(answers)
    
    //console.log(markDown)
    //console.log(answers)
    //return answers
    fs.writeFile(path.join(process.cwd() + '/dist/', 'README.md'), markDown, (err) => {
           if(err){
            console.log('Could not save file')
           } else {
            console.log('Succes: new README.md file generated')
           }
    })
    
  })
 
}

// function call to initialize program
init();
