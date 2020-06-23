const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', new mongoose.Schema({
  // by: mongoose.Schema.Types.ObjectId,
  // retweet: mongoose.Schema.Types.ObjectId,
  message: String,
  // name: String
}));

module.exports = Tweet;
