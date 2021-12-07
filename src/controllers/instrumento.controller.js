const Instrumento = require('../models/instrumento.modelo');

const instrumentoCtrl = {
  getInstrumentos: async (_, res) => {
    const instrumentos = await Instrumento.find();
    res.json(instrumentos);
  },
  createInstrumento: async (req, res) => {
    const { tipoInstrumento, instrumento, precio, descripcion, cantidad } =
      req.body;
    const newInstrumento = new Instrumento({
      tipoInstrumento,
      instrumento,
      precio,
      descripcion,
      cantidad,
    });
    await newInstrumento.save();
    res.json('Instrumento añadido');
  },
  getInstrumento: async (req, res) => {
    const instrumento = await Instrumento.findById(req.params.id);
    res.json(instrumento);
  },
  getInstrumentop: async (req, res) => {
    const instrumento = await Instrumento.findByprecio(req.params.precio);
    res.json(instrumento);
  },
  deleteInstrumento: async (req, res) => {
    await Instrumento.findByIdAndDelete(req.params.id);
    res.json('Instrumento eliminado');
  },
  updateInstrumento: async (req, res) => {
    const { body, params } = req;
    const { tipoInstrumento, instrumento, descripcion, precio, cantidad } =
      body;

    await Instrumento.findByIdAndUpdate(params.id, {
      tipoInstrumento,
      instrumento,
      descripcion,
      precio,
      cantidad,
    });
    res.json('Instrumento actualizado');
  },
};

module.exports = instrumentoCtrl;
