function generateMarkdown(data) {
  //use the data.----- to target each individual question we ask including the use of the spot for the badging
  return `
  
# ${data.title}
${data.licenseBadge}  <!-- Insert the license badge here -->

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
For questions or feedback, you can contact me via:
- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
  
