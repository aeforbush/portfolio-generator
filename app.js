// function that receives input and display data dynamically
const generatePage = (name, github) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
</head>

<body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">GitHub</a></h2>
</body>
</html>
` ;
};



// profileDataArgs holds the user command-line arguments (argv holds array)
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

console.log(name, github);
console.log(generatePage(name, github));


















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
