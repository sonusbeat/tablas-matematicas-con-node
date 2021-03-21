const { createFileTable } = require("./helpers/multiply");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "¡ La base tiene que ser un número !";
    }
    return true;
  })
  .argv;

console.clear();

// console.log(argv);

createFileTable(argv.b, argv.l)
  .then(msg => console.log(msg))
  .catch(error => console.log(error));
