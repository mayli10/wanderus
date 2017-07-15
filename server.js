var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var models = require('./models/models')
var User = models.User;


var mongoose = require('mongoose');
var connect = process.env.MONGODB_URI || require('./models/connect');
mongoose.connect(connect);


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/login', function(req,res) {

  res.send('SUCCESSS')
})

app.post('/register', function(req,res) {
  console.log(req.body)
  var newUser = new User ({
    username: req.body.username,
    password: req.body.password
  })
  newUser.save()
  console.log(newUser)
  // newUser.save()
  res.send('SUCCESS')
  })


  // app.get('/homepage')

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on:', port)
})

module.exports = app;
