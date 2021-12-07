const { initDatabase, clearDatabase } = require('../tests/data/generador');

async function initSetup() {
  console.log('Iniciando setup...');
  await clearDatabase();
  setTimeout(async () => {
    console.log('Iniciando base de datos...');
    await initDatabase();
    console.log('Base de datos inicializada...');
  }, 1000);
}

module.exports = initSetup;
