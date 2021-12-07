const {Router} = require('express');
const router  = Router();
const { getDonadores, getDonadorp, createDonador, getDonador, deleteDonador, updateDonador } =  require('../controllers/donador.controller');

router.route('/')
    .get(getDonadores)
    .post(createDonador);

router.route('/:id')
    .get(getDonador)
    .delete(deleteDonador)
    .put(updateDonador)

router.route('/:precio')
    .get(getDonadorp)

module.exports = router;