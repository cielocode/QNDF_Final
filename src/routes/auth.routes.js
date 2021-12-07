const {Router} = require ('express');
const router = Router();
const{signin, signup} = require ('../controllers/auth.controller')

router.route('/signup')
    .post(signup)

router.route('/signin')
    .post(signin)

module.exports = router;