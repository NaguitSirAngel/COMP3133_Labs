let myFs = require("fs");
let myPath = require("path");
let folder = `${process.cwd()}\\logs`;
let ext = "." + "txt";


let allFiles = myFs.readdir(folder, (err, files) => {
  if (err) throw err

files.filter(f => myPath.extname(f) == ext)
    .forEach(f => console.log(f))
    
    for(x in files){
    myFs.unlink(`${folder}\\${files[x]}`, (err) => {
        if (err) throw err;
      });
    }

    //myFs.rmdir();

});

const data = new Uint8Array(Buffer.from('Write something'));
let x = 0;
while(x != 10){
    x++;
    myFs.writeFile(`${folder}\\log${x}.txt`, data, (err) => {
        if (err) throw err;
        console.log(`log${x}.txt`);
      });
}




