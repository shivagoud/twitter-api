const User = require('../models/user');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'this will be stored in .env';

const authenticate = (req, res, next) => {

  let { token } = req.body || {};

  try {
    req.authData = jwt.verify(token, JWT_SECRET);
    next();
  } catch(err) {
    console.log(err);
    res.status(401).send('Unauthenticated request!');
  }

}

const loginUser = (req, res) => {
  return User.findOne().then(user=> {
    res.send({
      user,
      token: jwt.sign({user: user._id}, JWT_SECRET),
    });
  }).catch(err => {
    console.log(err);
    res.status(500).send('failed');
  });
}

const registerUser = function(req, res) {
  console.log('creating new user');
  return User.create({
    name: 'John Doe'
  }).then(user=> {
    res.status(201).send('success');
  }).catch(err => {
    res.status(500).send('failed');
  });
}

const getProfile = (req, res) => {}
const followUser = (req, res) => {}
const getFollowers = (req, res) => {}
const getFollowing = (req, res) => {}

module.exports = {
  authenticate, loginUser, registerUser, getProfile, followUser,
  getFollowers, getFollowing, getProfile
};
