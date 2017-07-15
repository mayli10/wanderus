var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var logger = require('morgan');
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

var validateReq = function(userData) {
  return (userData.password === userData.passwordRepeat);
};

// Passport
app.use(session({
  secret: 'Secret',
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.set('view engine', 'html');
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  models.User.findById(id, done);
});

// passport strategy
passport.use(new LocalStrategy(function(username, password, done) {
  // Find the user with the given username
  models.User.findOne({ username: username }, function (err, user) {
    // if there's an error, finish trying to authenticate (auth failed)
    if (err) {
      console.error('!!!! Error fetching user in LocalStrategy', err);
      return done(err);
    }
    // if no user present, auth failed
    if (!user) {
      return done(null, false, { message: '!!! Incorrect username.' });
    }
    // if passwords do not match, auth failed
    if (user.password !== password) {
      return done(null, false, { message: '!!! Incorrect password.' });
    }
    // auth has has succeeded
    return done(null, user);
  });
}
));

app.post('/register', function(req, res) {
      var user = new User({
        username: req.body.username,
        password: req.body.password,
      })
      user.save(function(err,user){
        if(err){
          console.log(err)
        }
      })
      res.send('true')
  })

  app.post('/login', passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/login'
  }));

  app.get('/login', function(req,res) {
    res.json({"success": "false"})
  })


  app.get('/loginSuccess', function(req,res) {
    res.json({"success": "true"})
  })




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


  // app.get('/homepage')

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on:', port)
})

module.exports = app;
