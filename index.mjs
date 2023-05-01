import inquirer from "inquirer";
import fs from "fs/promises";

// let response = await inquirer.prompt([
// structured formate
let {
  project_title,
  project_description,
  installation,
  usage,
  license,
  contributing,
  tests,
  questions,
} = await inquirer.prompt([
  // destructured format
  {
    type: "input",
    name: "project_title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "project_description",
    message: "Describe your project here",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please enter the necessary installation steps for use of this project",
  },
  {
    type: "input",
    name: "usage",
    message: "Helpful screenshots go here",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["Mozilla", "Artistic", "Eclipse"],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributions go here",
  },
  {
    type: "input",
    name: "tests",
    message: "Testing results go here",
  },
  {
    type: "input",
    name: "questions",
    message: "Please enter your github profile and email address here",
  },
]);

console.log({
  project_title,
  project_description,
  installation,
  usage,
  license,
  contributing,
  tests,
  questions,
});

let readmeText = `# ${project_title}
${project_title}

## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Project Description
${project_description}

## Installation
${installation}

## Usage
${usage}

## License
${generateLicense(license)}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, you can find my github profile here or you can send me an email ${questions}


`;

fs.writeFile("README.md", readmeText);

function generateLicense(license) {
  if (license === "mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "artistic") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else if (license === "eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else return "No license selected";
}
