// TODO: Create a function that returns a license badge, link, and section based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeLinkSection(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (license === "BSD-3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else {return ""}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.table(data)
  return `# ${data.projectname}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#Installation) \n
  [Usage](#Usage) \n
  [Licenses](#Licenses) \n
  [Contributors](#Contributors) \n
  [Tests](#Tests) \n
  [Questions](#Questions) \n

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Licenses
  ${renderLicenseBadgeLinkSection(data.license)}
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.tests}
  
  ## Questions
   ${data.questions}
   ${data.username}
   ${data.email}`;
}

module.exports = generateMarkdown;
