// capturing data with Inquirer
const inquirer = require('inquirer');

// wrapping object array prompt inside a promptUser function to be invoked on demand
const promptUser = () => {
return inquirer.prompt
    ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
    }
]);
};

const promptProject = portfolioData => {
    // If there's no 'projects' array property, create one (initialized once)
    if (!portfolioData.projects) {
    // array to hold multiple projects in the portfolioData object
    portfolioData.projects = [];
    }
    console.log(`
    ================
    Add a New Project
    ================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },    
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }  
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            }else{
                return portfolioData;
            }
        })  
    ]);
};
promptUser()
// .then(answers => console.log(answers))
.then(promptProject)
// .then(projectAnswers => console.log(projectAnswers))
.then(portfolioData => {
    console.log(portfolioData);
});


// function that receives input and display data dynamically
// const fs = require('fs');

// receives exported functions
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// displays file to browser
// fs.writeFile('index.html', pageHTML, err => {
    // if(err) throw err;
   // console.log('Portfolio complete!');
// });






/*// profileDataArgs holds the user command-line arguments (argv holds array)
// const profileDataArgs = process.argv.slice(2, process.argv.length);
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;*/











/*// const profileDataArgs = process.argv.slice(2, process.argv.length);
const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    // this...
    for (let i =0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
    console.log('===========');
    // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};
printProfileData(profileDataArgs);*/
