const app = require('./app');
require('./database');

async function main() {
  await app.listen(app.get('port'));
  const port = app.get('port');
  console.log(`Servidor corriendo en el puerto: ${port}`);
}

main();
