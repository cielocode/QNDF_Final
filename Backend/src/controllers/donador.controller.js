const Donador = require('../models/donador.modelo');
const { createDonors } = require('../tests/data/generador');

const donadorCtrl = {
  getDonadores: async (req, res) => {
    const donadores = await Donador.find();
    // createDonors(1, 'admin');
    res.json(donadores);
  },
  createDonador: async (req, res) => {
    const {
      tipoid,
      identificacion,
      clave,
      rol,
      activo,
      fijo,
      celular,
      correo,
      direccion,
      nombreCompleto,
    } = req.body;
    const newDonador = new Donador({
      tipoid,
      identificacion,
      clave,
      rol,
      activo,
      fijo,
      celular,
      correo,
      direccion,
      nombreCompleto,
    });
    await newDonador.save();
    res.json('Donador añadido');
  },
  getDonador: async (req, res) => {
    const donador = await Donador.findById(req.params.id);
    res.json(donador);
  },
  getDonadorp: async (req, res) => {
    const donador = await Donador.findByprecio(req.params.precio);
    res.json(donador);
  },
  deleteDonador: async (req, res) => {
    await Donador.findByIdAndDelete(req.params.id);
    res.json('Donador eliminado');
  },
  updateDonador: async (req, res) => {
    const {
      _id,
      tipoid,
      identificacion,
      clave,
      rol,
      activo,
      fijo,
      celular,
      correo,
      direccion,
      nombreCompleto,
    } = req.body;
    await Donador.findByIdAndUpdate(req.params.id, {
      _id,
      tipoid,
      identificacion,
      clave,
      rol,
      activo,
      fijo,
      celular,
      correo,
      direccion,
      nombreCompleto,
    });
    res.json('Donador actualizado');
  },
};

module.exports = donadorCtrl;
