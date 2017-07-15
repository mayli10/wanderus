<<<<<<< HEAD
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import session from 'express-session';
import models from './models/models';
var User = models.User;

import routes from './routes/index';
import auth from './routes/auth';

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport stuff here
app.use(session({ secret: "elise's toilet paper" }));

// Tell Passport how to set req.user
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Tell passport how to read our user models
passport.use(new LocalStrategy(function(username, password, done) {
  // Find the user with the given username
  User.findOne({ username: username }, function (err, user) {
    // if there's an error, finish trying to authenticate (auth failed)
    if (err) {
      console.log(err);
      return done(err);
    }
    // if no user present, auth failed
    if (!user) {
      return done(null, false);
    }
    // if passwords do not match, auth failed
    if (user.password !== password) {
      console.log('uh oh went in here wrong password')
      return done(null, false);
    }
    console.log('hellllll yes we in here')
    // auth has has succeeded
    return done(null, user);
  });
}));

app.use(passport.initialize());
app.use(passport.session());
// YOUR CODE HERE

// Uncomment these out after you have implemented passport in step 1
app.use('/', auth(passport));
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

=======
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
>>>>>>> 8ebac9aa6bbfe7c2a9e0baaa542c88120731a1a4

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
