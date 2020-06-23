const router = require('express').Router();
const {followUser, getFollowers, getFollowing} = require('../controllers/user.controller');

router.patch('/:user_id/follow', followUser);
router.get('followers', getFollowers);
router.get('following', getFollowing);

module.exports = router;
