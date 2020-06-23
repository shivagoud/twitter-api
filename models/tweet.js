const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const Tweet = mongoose.model('Tweet', new mongoose.Schema({
  owner: {
    type: ObjectId,
    ref: 'User'
  },
  retweet: {
    type: ObjectId,
    ref: 'Tweet'
  },
  message: String,
}, {timestamps: true}));

module.exports = Tweet;
