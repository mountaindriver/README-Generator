// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your full name?',
        name: 'name'
    },
    {
        type: 'input',
        message: "What is your Github Username?",
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your linkedin username?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'fileName',
    },
    {
        type: 'input',
        message: 'What is the project repo name?',
        name: 'repoName'
    },
    {
        type: 'input,',
        message: 'What is a short description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test instructions?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
   
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices: ['Apache-2.0-blue', 'BSD-3-Clause', 'BSD-2-Clause', 'gpl-license', 'lgpl-license', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0'],
    },

];


inquirer
    .prompt(questions)
    .then((data) => {
        const fileName = data.fileName;
        console.log(fileName);

        fs.writeFileSync(`${fileName}.md`, generateMarkdown(data))
    })

