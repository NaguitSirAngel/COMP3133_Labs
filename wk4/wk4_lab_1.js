const fs = require('fs');
const path = require('path');
const process = require('process');

const myDir = process.cwd();

//let arg = process.argv.slice(2).toString();

//const directoryPath = path.join(myDir, arg);

//console.log(arg);

fs.readdir(myDir, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) { // for file of files
        if(file.split('.')[1] == process.argv.slice(2).toString()){
            console.log(file);
        }    
    });
});