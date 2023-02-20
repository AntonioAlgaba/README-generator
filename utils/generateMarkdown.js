
// function to generate logo licence

let renderLicence = (license) => {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    case "GNUPLv3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicence(data.license)}
## Description
  ${data.description}

##  Table of Content
- [Project description](#description)
- [Installation](#installation)
- [Instruction](#instruction)
- [Usage](#usage)
- [Constributions](#contributing)
- [TestInstruction](#test)
- [Questions](#questions)
- [Lincence](#licence)
  
## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Constributing
  ${data.contributing}

## Test 
  ${data.test}

## Questions

Email me or reach out on GitHub:

- Email: ${data.email}

- Github: [@${data.github}](https://github.com/${data.github})
  
  
   
## License
  ${data.license}
  `;
  }
  
  
  module.exports = generateMarkdown;
  