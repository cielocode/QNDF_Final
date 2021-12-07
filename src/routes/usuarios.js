const { Router } = require('express');
const router = Router();
const {
  crearUsuario,
  getUsers,
  updateUser,
} = require('../controllers/user.controller');

router.route('/').get(getUsers).post(crearUsuario);

router.route('/:id').put(updateUser);

module.exports = router;
