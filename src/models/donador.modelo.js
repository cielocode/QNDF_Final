const { Schema, model } = require('mongoose');
/**
 * {String} tipoid representa el tipo de identificación del donador
 * sea cedula (CC), cedula de extranjeria (ce), RUT (RUT) o NIT (nit)
 *
 * {String} rol puede ser admin o invitado
 *
 */
const donadorSchema = new Schema(
  {
    tipoid: { type: String, require: true },
    identificacion: { type: String, require: true },
    clave: String,
    rol: String,
    activo: { type: Boolean, default: true },
    fijo: Number,
    celular: Number,
    correo: String,
    direccion: String,
    nombreCompleto: String,
  },
  {
    timestamps: true,
  },
);

module.exports = model('Donadores', donadorSchema);
