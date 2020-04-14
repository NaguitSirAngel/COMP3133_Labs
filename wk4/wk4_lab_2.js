const process = require('process');

console.log(`This platform is ${process.platform}`);
console.log(`This processor architecture is ${process.arch}`);
console.log(`=====================================================`)

console.log(`Version Node JS: ${process.version}`);
console.log(`V8 version ${process.versions.v8}`);
console.log(`libuv version ${process.versions.uv}`);
console.log(`=====================================================`)

//console.log(process.versions);
console.log(`This process is pid ${process.pid}`);
console.log(`Title:  ${process.title}`)
console.log(`Current directory: ${process.cwd()}`);
