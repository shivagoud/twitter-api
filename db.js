const mongoose = require('mongoose'); 

const MONGO = 'mongodb://localhost:27017/twitter';
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports = () => mongoose.connect(MONGO);
