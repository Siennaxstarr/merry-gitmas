const inquirer = require('inquirer');
const fs = require('fs');

function generateREADME(answers) {
  return `
# ${answers.projectTitle}
## Table of Contents 

* [nstallation](#installation)

## Description
${answers.description}

${answers.features ? '## Features\n' + answers.features : ''}

${answers.howToUse ? '## How to Use\n' + answers.howToUse : ''}

## Installation
${answers.installation}

${answers.contributing ? '## Contributing\n' + answers.contributing : ''}

${answers.tests ? '## Tests\n' + answers.tests : ''}

## Questions
GitHub: [${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}
  `;
}

const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description for your project:',
  },
  {
    type: 'input',
    name: 'features',
    message: 'List the features of your Lunch Generator (if any):',
  },
  {
    type: 'input',
    name: 'howToUse',
    message: 'Provide instructions on how to use your Lunch Generator:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide a walk through of the installation process:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for contributing to your project (if any):',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide information on how to run tests (if any):',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    // Generate README content
    const readmeContent = generateREADME(answers);

    // Write the content to a README.md file
    fs.writeFile('READMEproject.md', readmeContent, (err) => {
      if (err) {
        console.error('Error writing README file:', err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error('Error during inquirer prompt:', error);
  });
