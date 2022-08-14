// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

function renderBuiltWith(data) {
  const built = data.built;
  console.log(built);

  // * [![Next][Next.js]][Next-url]
  // * [![React][React.js]][React-url]
  // * [![Vue][Vue.js]][Vue-url]
  // * [![Angular][Angular.io]][Angular-url]
  // * [![Svelte][Svelte.dev]][Svelte-url]
  // * [![Laravel][Laravel.com]][Laravel-url]
  // * [![Bootstrap][Bootstrap.com]][Bootstrap-url]
  // * [![JQuery][JQuery.com]][JQuery-url]

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.fileName}
  <!-- PROJECT LOGO -->
  <br />
  <div align="center">
    <a href="https://github.com/${data.userName}/${data.repoName}">
      <img src="images/logo.png" alt="Logo" width="80" height="80">
    </a>
  <h3 align="center">${data.fileName}</h3>
    <p align="center">
       <br />
      <a href="https://github.com/${data.userName}/${data.repoName}"><strong>Explore the docs »</strong></a>
      <br />
      <br />
      <a href="https://github.com/${data.userName}/${data.repoName}">View Demo</a>
      ·
      <a href="https://github.com/${data.userName}/${data.repoName}/issues">Report Bug</a>
      ·
      <a href="https://github.com/${data.userName}/${data.repoName}/issues">Request Feature</a>
    </p>
  </div>
  
  
  <!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li><a href='#license'>License</a></li>
      <li><a href='#description'>Description</a></li>
      <li><a href='#Installation'>Installation</a></li>
      <li><a href='#usage'>Usage</a></li>
      <li><a href='#contributing'>Contributing</a></li>
      <li><a href='#tests'>Tests</a></li>
      <li><a href='#questions'>Questions</a></li>
    </ol>
  </details>

  ## License
  
  Distributed under the ${data.license} License.<br>
    [![License](https://img.shields.io/badge/License/${data.license}.svg)](https://opensource.org/licenses/${data.license})
  
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  

  ## Description
  
  ${data.description}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  ## Installation
  
  ${data.installation}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  ## Usage
  
  ${data.usage}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  ## Contributing
  
  ${data.contribution}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  ## Tests
  
  ${data.test}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  ## Questions
  
  If you have any question please feel free to reach me at eithr my at me Linkedin, Github, or Email.
  <p align="left">Linkedin: <a href="#https://www.linkedin.com/in/${data.linkedin}">${data.linkedin}</a></p>
  <p align="left">Github: <a href="#https://github.com/${data.userName}">${data.userName}</a></p>
  <p align="left">Email: <a href="#${data.email}">Email: ${data.email}</a></p>`
}

module.exports = generateMarkdown;
