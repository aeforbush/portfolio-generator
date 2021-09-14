// function that receives input and display data dynamically
const fs = require('fs');

// receives exported functions
const generatePage = require('./src/page-template.js');

// profileDataArgs holds the user command-line arguments (argv holds array)
// const profileDataArgs = process.argv.slice(2, process.argv.length);
const profileDataArgs = process.argv.slice(2);


const [name, github] = profileDataArgs;

const pageHTML = generatePage(name, github);


// displays file to browser
fs.writeFile('index.html', pageHTML, err => {
    if(err) throw err;
    console.log('Portfolio complete!');
});


















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
