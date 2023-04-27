import inquirer from "inquirer";
import fs from "fs/promises";

// let response = await inquirer.prompt([
// structured formate
let { description, last_name } = await inquirer.prompt([
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
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["Mozilla", "Artistic", "Eclipse"],
    filter(val) {
      return val.toLowerCase();
    },
  },
]);

console.log(first_name, last_name);

let readmeText = `# Project Description
${description}

## The second largest heading
${generateLicense(license)}

### The third largest heading


##### The smallest heading 

`;

fs.writeFile("README.md", readmeText);

function generateLicense(license) {
  if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Artistic") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else if (license === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else return "No license selected";
}
