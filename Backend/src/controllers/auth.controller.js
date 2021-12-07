const User = require('../models/user.modelo');
const Role = require('../models/roles.modelo');
const jwt = require('jsonwebtoken');
const config = require('../config');

const expiresIn = Math.round(Date.now() / 1000 + 30 * 24 * 60);

const authCtrl = {
  signup: async (req, res) => {
    try {
      const { username, email, password, roles = 'user' } = req.body;
      const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
      });
      //verificar roles
      if (req.body.roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map((role) => role._id);
      } else {
        const role = await Role.findOne({ name: 'user' });
        newUser.roles = [role._id];
      }

      //salvar usuario en mongo
      const savedUser = await newUser.save();

      //Crear el token
      const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400,
      });
      return res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
  signin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userFound = await User.findOne({ email }).populate('roles');

      if (!userFound)
        return res
          .status(404)
          .json({ status: 404, message: 'Usuario no encontrado' });

      if (await userFound.comparePassword(password)) {
        const payload = {
          email: userFound.email,
          exp: expiresIn,
        };

        const token = jwt.sign(payload, config.SECRET);
        return res.status(200).json({
          status: 200,
          token,
          mensaje: 'Bienvenido',
          user: userFound,
        });
      }
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    } catch (error) {
      res.status(404).json({ ok: false, error });
    }
  },
};

module.exports = authCtrl;
