const { createFileTable } = require("./helpers/multiply");

console.clear();

const [, , arg3 = "base=5"] = process.argv;
const [, base = 0] = arg3.split("=");

createFileTable(base)
  .then(msg => console.log(msg))
  .catch(error => console.log(error));
