// mock data for testing 
/*const mockData = {
    name: 'Aimee',
    github: 'aeforbush',
    confirmAbout: true,
    about: 'I love coding!',
    projects: [
      {
        name: 'portfolio generator',
        description: 'using node to take input and display a portfolio page',
        languages: [],
        link: 'aeforbush',
        feature: false,
        confirmAddProject: false
      }
    ]
  }*/

// capturing data with Inquirer
// function that receives input and display data dynamically
const fs = require('fs');
const inquirer = require('inquirer');
// receives exported functions
const generatePage = require('./src/page-template');


// wrapping object array prompt inside a promptUser function to be invoked on demand
const promptUser = () => {
return inquirer.prompt
    ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else{
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }else{
                console.log('Please enter your GitHub Username.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter information about yourself for an "About" section?',
        default: true 
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({confirmAbout}) => confirmAbout
    }
]);
};

const promptProject = portfolioData => {
    console.log(`
    ================
    Add a New Project
    ================
    `);
    // If there's no 'projects' array property, create one (initialized once)
    if (!portfolioData.projects) {
    // array to hold multiple projects in the portfolioData object
    portfolioData.projects = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                }else{
                    console.log('Please enter the name of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                }else{
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
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
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                }else{
                    console.log('Please enter your GitHub project link.');
                    return false;
                }
            }
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
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }else{
            return portfolioData;
        }
    }); 
};


// promptUser function call
promptUser()
.then(promptProject)
.then(portfolioData => {
const pageHTML = generatePage(portfolioData);


// displays file to browser
fs.writeFile('./dist/index.html', pageHTML, err => {
    if (err) throw new Error (err);
    console.log('Page created!');
    
    console.log('Page created!');
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Style sheet copied successfully!');
    });
});
});


// temporary mock function call
// const pageHTML = generatePage(mockData);











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
