const { createFileTable } = require("./helpers/multiply");
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);

console.log("base: yargs", argv.base);

// createFileTable(base)
//   .then(msg => console.log(msg))
//   .catch(error => console.log(error));
