const fileSystem = require("fs");

const createFileTable = async (base = 0, listar = false) => {
  try {
    let output = '';
    output += '===================\n';
    output += `${' '.repeat(4)}Tabla del ${base}\n`;
    output += '===================\n';

    for(let i = 1; i <= 10; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    if(listar) console.log(output);

    fileSystem.writeFileSync(`tabla-del-${base}.txt`, output);

    return `¡ tabla-del-${base}.txt ha sido creada correctamente !\n`;
  } catch(error) {
    throw error;
  }
};

module.exports = {
  createFileTable
};