const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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
  const { email, password } = req.body || {};

  return User.findOne({email}).then(user=> {

    bcrypt.compare(password, user.password).then(verified=> {
      if(verified) {
        res.send({
          user,
          token: jwt.sign({user: user._id}, JWT_SECRET),
        });
      } else {
        res.status(401).send('Invalid credentials!');
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).send('failed');
  });
}

const registerUser = function(req, res) {
  const { email, password } = req.body || {};

  return bcrypt.hash(password, 10).then(hash => {
    return User.create({
      name: 'John Doe',
      email,
      password: hash,
    }).then(user=> {
      console.log(user);
      res.status(201).send('success');
    });
  }).catch(err => {
    console.log(err);
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
