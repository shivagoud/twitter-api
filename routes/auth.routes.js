const router = require('express').Router();
const { loginUser, registerUser } = require('../controllers/user.controller');

router.get('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
