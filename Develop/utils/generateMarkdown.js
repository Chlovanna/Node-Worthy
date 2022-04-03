const badge = [
  {
    name: "MIT",
    link: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    desc: "The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.",
  },
];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(myBadge) {
  for (let i = 0; i < badge.length; i++) {
    if (myBadge.license == badge[i].name) {
      return myBadge.license;
    } else {
      return "none";
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(myBadge) {
  for (let i = 0; i < badge.length; i++) {
    if (myBadge.license == badge[i].name) {
      return myBadge.link;
    } else {
      return "none";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
