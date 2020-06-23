const router = require('express').Router();
const {getFeed, createTweet } = require('../controllers/tweet.controller');

router.get('/feed', getFeed);
router.post('/tweet', createTweet);

module.exports = router;
