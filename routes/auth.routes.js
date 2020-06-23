const router = require('express').Router();

router.get('login', loginUser);
router.post('register', registerUser);

module.exports = router;
