// importing fs file
const fs = require('fs');
const { resolve } = require('path');

// js promise
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if no error
            resolve({
                ok: true,
                message: "File Created!"
            });
        });
    });

};

const copyFile = copiedFiles => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/app.js', copiedFiles, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "Filed Copied!"
            });
        });
    });
};

// ES6 simplifies because the property name and value name are the same "writeFile: writeFile"
module.exports = {writeFile, copyFile};