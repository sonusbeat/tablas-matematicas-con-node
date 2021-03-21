const fileSystem = require("fs");
const colors = require("colors");

const createFileTable = async (base = 0, listar = false) => {
  try {
    let output = '';
    output += '===================\n'.magenta;
    output += `${' '.repeat(4)}Tabla del ${colors.blue(base)}\n`.white;
    output += '===================\n'.magenta;

    for(let i = 1; i <= 10; i++) {
      output += `${colors.white(base)} ${'x'.blue} ${i} ${'='.cyan} ${colors.green(base * i)}\n`;
    }

    if(listar) console.log(output);

    fileSystem.writeFileSync(`tabla-del-${base}.txt`, output);

    return '!' + ` tabla-del-${base}.txt`.green + ` ha sido creada correctamente !\n`;
  } catch(error) {
    throw error;
  }
};

module.exports = {
  createFileTable
};