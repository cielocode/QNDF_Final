const faker = require('faker');
const Instrumento = require('../../models/instrumento.modelo');
const Donadores = require('../../models/donador.modelo');
const { Role } = require('../../models/roles.modelo');
const Usuario = require('../../models/user.modelo');
const mongoose = require('mongoose');

async function createInstrument(amount = 1) {
  for (let i = 0; i < amount; i++) {
    await new Instrumento({
      tipoInstrumento: faker.random.word(),
      instrumento: faker.random.word(),
      precio: faker.finance.amount(),
      descripcion: faker.random.words(),
      cantidad: faker.random.number(),
    }).save();
  }
}

async function createDonors({ amount = 1, role = 'user' } = {}) {
  for (let i = 0; i < amount; i++) {
    const isEven = i % 2 === 0;
    const fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const tipoID = isEven ? 'CC' : 'NIT';

    await new Donadores({
      tipoid: tipoID,
      identificacion: faker.datatype.uuid(),
      clave: 'admin',
      rol: role,
      activo: isEven,
      fijo: 123456789,
      celular: 123456789,
      correo: faker.internet.email(),
      direccion: faker.address.streetName(),
      tipoPersona: isEven ? 'natural' : 'juridica',
      nombreCompleto: fullName,
    }).save();
  }
}

async function createRoles() {
  ['user', 'admin'].forEach(async (role) => {
    await new Role({ name: role }).save();
  });
}

async function createUsers({ amount = 1, role = 'user' } = {}) {
  role = await Role.findOne({ name: role });
  const adminRole = await Role.findOne({ name: 'admin' });

  for (let i = 0; i < amount; i++) {
    const user = new Usuario({
      username: faker.internet.userName(),
      password: 'admin@1234',
      email: faker.internet.email(),
    });

    user.roles = [i === 0 ? adminRole._id : role._id];
    await user.save();
  }
}

async function initDatabase() {
  await Promise.all([
    createRoles(),
    createInstrument(10),
    createDonors({ amount: 1, role: 'admin' }),
    createDonors({ amount: 10, role: 'user' }),
    createUsers({ amount: 10, role: 'user' }),
  ]);
}

async function clearDatabase() {
  await Promise.all([
    Donadores.deleteMany(),
    Instrumento.deleteMany(),
    Role.deleteMany(),
    Usuario.deleteMany(),
  ]);
}

module.exports = {
  createInstrument,
  createDonors,
  createUsers,
  createRoles,
  initDatabase,
  clearDatabase,
};
