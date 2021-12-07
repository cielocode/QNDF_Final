const {Schema, model} = require('mongoose');

const instrumentoSchema = new Schema ({
    tipoInstrumento: {type: String, require: true},
    instrumento: String,
    precio: String,
    descripcion: String,
    cantidad: Number

});

module.exports = model('Instrumentos', instrumentoSchema);