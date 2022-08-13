// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderBuiltWith(data){
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
  return `#${data.fileName}
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
      <li><a href='#description'>Description</a></li>
      <li><a href='#installation'></a>Installation</li>
      <li><a href='#usage'></a>Usage</li>
      <li><a href='#license'></a>License</li>
      <li><a href='#contributing'></a>Contributing</li>
      <li><a href='#tests'></a>Tests</li>
      <li><a href='#questions'></a>Questions</li>
    </ol>
  </details>
  # Description
  
  ${data.description}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  ## Installation
  
  ${data.installation}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  ## Usage
  
  ${data.usage}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  ## License
  
  Distributed under the ${data.license} License. See LICENSE.txt for more information.<br>
    [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  
  
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  ## Contributing
  
  ${data.contribution}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  ## Tests
  
  ${data.test}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  ## Questions
  
  ${data.userName}
  https://github.com/${data.userName}
  
  ${data.email}`  
}

module.exports = generateMarkdown;
