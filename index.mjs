import inquirer from "inquirer";
import fs from "fs/promises";

// let response = await inquirer.prompt([
// structured formate
let { project_title, project_description, usage, contact, license } =
  await inquirer.prompt([
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
      name: "usage",
      message: "Helpful screenshots go here",
    },
    {
      type: "input",
      name: "contact",
      message: "Helpful links go here",
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

console.log({ project_title, project_description, usage, contact, license });

let readmeText = `# ${project_title}
${project_title}

## Project Description
${project_description}

## Usage
${usage}

## Contact
${contact}

## License
${generateLicense(license)}
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
