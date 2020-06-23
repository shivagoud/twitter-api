const router = require('express').Router();

router.patch('/:user_id/follow', followUser);
router.get('followers', getFollowers);
router.get('following', getFollowing);

module.exports = router;
