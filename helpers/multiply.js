const fileSystem = require("fs");

const createFileTable = async (base = 0) => {
  try {
    console.log('===================');
    console.log(' '.repeat(4) + 'Tabla del', base);
    console.log('===================');

    let output = '';

    for(let i = 1; i <= 10; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(output);

    fileSystem.writeFileSync(`table-${base}.txt`, output);

    return `table-${base}.txt created successfully!`;
  } catch(error) {
    throw error;
  }
};


module.exports = {
  createFileTable
};