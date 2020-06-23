const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const Tweet = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  followers: [{type: ObjectId, ref: 'User'}],
  password: String
}, {timestamps: true}));

module.exports = Tweet;
