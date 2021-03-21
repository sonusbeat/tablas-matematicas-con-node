const { createFileTable } = require("./helpers/multiply");
const argv = require("./config/yargs");
require("colors");

console.clear();

// console.log(argv);

createFileTable(argv.b, argv.l)
  .then(msg => console.log(msg))
  .catch(error => console.log(error.red));
