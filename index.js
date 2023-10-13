// created a const for each node dependency we use and a generate markdown const to make markdown files instead of html files
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

//reference the mini project and utilize the inquirer dependency 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title: ',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description: ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions: ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information: ',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Other'],
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Enter information about contributions: ',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter information about tests: ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address: ',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username: ',
    },
  ])
  .then((answers) => {
    // You can create a full URL for the license badge based on the chosen license: these will match based on the users selection and use exact === to make sure the users selection is valid
    if (answers.license === 'MIT') {
      answers.licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (answers.license === 'Apache 2.0') {
      answers.licenseBadge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)';
    } else if (answers.license === 'GPL 3.0') {
      answers.licenseBadge = '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    // Generate the README content using the answers
    const markdownContent = generateMarkdown(answers);

    // Write the content to the README.md file, makes the files info be overwritten if re-ran
    fs.writeFileSync('README.md', markdownContent, 'utf8');

    console.log('README.md has been generated successfully.');
  });
  
