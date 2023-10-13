// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

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
        //list is used instead of input to let the user select the answer inside the terminal from a given array of options
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Other'],
    },
  ])
  .then((answers) => {
    //added utf8 after learning about character encoding
    const markdownContent = generateMarkdown(answers);
    //tried out implementation of writefilesync instead of just writefile i learned writefilesync is synchronous and writeFile is asynchronous meaning one allows for other things to happen while executing the code.
    fs.writeFileSync('README.md', markdownContent, 'utf8');
    //adds a completion message on success
    console.log('README.md has been created successfully.');
  });





// const readmeGenerate = ({ projectTitle, description, installation, linkedin }) =>


// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'projectTitle',
//       message: 'What is the name of your project?',
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: 'write a short description for your project',
//     },
//     {
//       type: 'input',
//       name: 'tableOfContents',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'installation',
//       message: 'any installation notes',
//     },
//     {
//       type: 'input',
//       name: 'usage',
//       message: 'if applicable add your screenshot of your project directory here',
//     },
//     {
//       type: 'list',
//       name: 'license',
//       message: '',
//     },
//   ])
//   .then((answers) => {
//     const readmeAnswers = readmeGenerate(answers);

//     fs.writeFile('README.md', readmeAnswers, (err) =>
//       err ? console.log(err) : console.log('Successfully created README.md!')
//     );
//   });

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();