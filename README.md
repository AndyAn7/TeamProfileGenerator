# TeamProfileGenerator

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

[GitHub Repo](https://github.com/AndyAn7/TeamProfileGenerator)
# README-Generator
## Table Of Contents
- [Description](#description)

- [Code](#code)

- [Tutorial](#tutorial)

- [User Story](#user)

- [Criterion](#crit)

- [License](#license)

## [Description](#description)
<a name="description"></a>
A generator that queries and then creates a list of employees with pertinent information to be displayed as relates to the user input.

## [Code](#code)
<a name="code"></a>
HTML+Bootstrap+Javascript+Node+Inquirer+Jest

## [MockUp](#mockup)
<a name="mockup"></a>
![image](https://github.com/AndyAn7/TeamProfileGenerator/blob/main/images/SS.png?raw=true)

## [UI/Video Tutorial of Application](#tutorial)
<a name="tutorial"></a>
[![Tutorial](https://github.com/AndyAn7/TeamProfileGenerator/blob/main/images/walkthrough.png?raw=true)](https://youtu.be/1VqwxZb1t_E)

## [User Story](#user)
<a name="user"></a>

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

```

## [Criterion](#crit)
<a name="crit"></a>

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

```

## [License](#license)
<a name="license"></a>
MIT License

Copyright (c) 2022 Andrew An

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
