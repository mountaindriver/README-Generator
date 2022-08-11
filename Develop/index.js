// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your Github Username?",
        name: 'Username',
    },
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'fileName',
    },
    {
        type: 'input,',
        message: 'What is a description of your project?',
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
        name: 'iusage',
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
        type: 'list',
        message: 'Licenses?',
        name: 'licenses',
        choices: ['Apache', 'BSD 3-Clause', 'BSD 2-Clause', 'GPL', 'LGPL', 'MIT', 'Mozilla Public License 2.0', 'Common Development and Distribution LIcense', 'Eclipse Public License version 2.0'],
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // const filename = `${data.fileName}`

    // fs.writeFileSync(filename, JSON.stringify(data, null, '\t'),
    // err ? console.log(err): console.log('Success!')
}

inquirer
    .createPromptModule([
        {
            type: 'input',
            message: "What is your Github Username?",
            name: 'Username',
        },
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'fileName',
        },
        {
            type: 'input,',
            message: 'What is a description of your project?',
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
            name: 'iusage',
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
            type: 'list',
            message: 'Licenses?',
            name: 'licenses',
            choices: ['Apache', 'BSD 3-Clause', 'BSD 2-Clause', 'GPL', 'LGPL', 'MIT', 'Mozilla Public License 2.0', 'Common Development and Distribution LIcense', 'Eclipse Public License version 2.0'],
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },

    ])
    .then((data) => {
        const fileName = data.fileName;
        console.log(fileName);

        fs.writeFileSync()
        err ? console.log(err) : console.log('Success!')
    })
// .then(writeToFile())

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
