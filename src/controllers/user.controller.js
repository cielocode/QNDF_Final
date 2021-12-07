const Usuario = require('../models/user.modelo');
const { Role } = require('../models/roles.modelo');

const userCtrl = {
  crearUsuario: async (req, res) => {
    try {
      const { username, email, password, role } = req.body;
      const rolesFound = await Role.find({ name: role || 'user' });
      const user = new Usuario({
        username,
        email,
        password,
        roles: rolesFound.map((role) => role._id),
      });

      //salvar nuevo usuario
      const savedUser = await user.save();

      return res.status(200).json({
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        roles: savedUser.roles,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getUsers: async (_, res) => {
    const users = await Usuario.find().populate('roles');
    res.json(users);
  },
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { username, email, role } = req.body;
    const rolesFound = await Role.find({ name: role || 'user' });
    const user = await Usuario.findByIdAndUpdate(id, {
      username,
      email,
    });

    user.roles = rolesFound.map((role) => role._id);
    await user.save();

    res.json(user);
  },
};

module.exports = userCtrl;
