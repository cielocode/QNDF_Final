const express = require('express');
const app = express();
const cors = require('cors');
const init = require('./libs/initSetup');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
// app.use('/api/articulos', require('./routes/articulos'))
app.use('/api/users', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/donadores', require('./routes/donadores'));
app.use('/api/instrumentos', require('./routes/instrumentos'));

module.exports = app;
