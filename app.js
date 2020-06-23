var express = require('express');
const tweetRoutes = require('./routes/tweet.routes');
// const userRoutes = require('./routes/user.routes');
// const {getProfile} = require('./controllers/user.controllers');
// const { authenticate } = require('./controllers/user.controllers');

var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

// app.use('/auth', authRouter);

// app.use(authenticate);
// app.get('/profile', getProfile);
// app.use('/users', userRoutes);
app.use('/tweets', tweetRoutes);

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
