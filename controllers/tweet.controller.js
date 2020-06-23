const Tweet = require('../models/tweet');

const getFeed = function(req, res) {
  return Tweet.find().then(tweets=> {
    res.send(tweets);
  }).catch(err => {
    res.status(500).send('failed');
  });
}

const createTweet = function(req, res) {
  return Tweet.create({
    message: 'Test tweet'
  }).then(tweet=> {
    res.status(201).send('success');
  }).catch(err => {
    res.status(500).send('failed');
  });
}

module.exports = {getFeed, createTweet};
