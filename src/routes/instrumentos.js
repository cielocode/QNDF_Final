const { Router } = require('express');
const router = Router();
const {
  getInstrumentos,
  getInstrumentop,
  createInstrumento,
  getInstrumento,
  deleteInstrumento,
  updateInstrumento,
} = require('../controllers/instrumento.controller');

router.route('/').get(getInstrumentos).post(createInstrumento);

router
  .route('/:id')
  .get(getInstrumento)
  .delete(deleteInstrumento)
  .put(updateInstrumento);

router.route('/:precio').get(getInstrumentop);

module.exports = router;
