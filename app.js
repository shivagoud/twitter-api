var express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const dbConnect = require('./db');
const tweetRouter = require('./routes/tweet.routes');
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/user.routes');
const { authenticate, getProfile } = require('./controllers/user.controller');

var app = express();
// Apply body Parser
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));


app.get('/', function(req, res){
  res.send('Hello World');
});

app.use('/auth', authRouter);

app.use(authenticate);
app.get('/profile', getProfile);
app.use('/users', userRouter);
app.use('/tweets', tweetRouter);

dbConnect().then(db => {
  app.listen(3000);
  console.log('Express started on port 3000');
}).catch(err => {
  console.log('Couldn\'t connect to database');
});
