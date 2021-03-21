const fileSystem = require("fs");
const colors = require("colors");

const createFileTable = async (base = 0, listar = false, hasta = 10) => {
  try {
    let output  = '';
    let terminal = '';

    terminal += '===================\n'.magenta;
    terminal += `${' '.repeat(4)}Tabla del ${colors.blue(base)}\n`.white;
    terminal += '===================\n'.magenta;

    output += '===================\n';
    output += `${' '.repeat(4)}Tabla del ${base}\n`;
    output += '===================\n\n';

    for(let i = 1; i <= hasta; i++) {
      output  += `${base} x ${i} = ${base * i}\n`;
      terminal += `${colors.white(base)} ${'x'.blue} ${i} ${'='.cyan} ${colors.green(base * i)}\n`;
    }

    if(listar) console.log(terminal);

    fileSystem.writeFileSync(`./output/tabla-del-${base}.txt`, output);

    return '!' + ` tabla-del-${base}.txt`.green + ` ha sido creada correctamente !\n`;
  } catch(error) {
    throw error;
  }
};

module.exports = {
  createFileTable
};