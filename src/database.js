const mongoose = require('mongoose');
const initSetup = require('./libs/initSetup');

const URI =
  'mongodb+srv://quenotadefuturo2021:Z1etHNZxnlbsr7q3@quenotadefuturo.hn2g9.mongodb.net/quenotaDB?retryWrites=true&w=majority';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', async () => {
  console.log('Base de datos conectada...');
  // await initSetup();
});
