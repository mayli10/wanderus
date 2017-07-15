var express = require('express');
var router = express.Router();
var models = require('../models/models');
var User = models.User;

var validateReq = function(userData) {
  return (userData.password === userData.passwordRepeat);
};

module.exports = function(passport) {
  // Add Passport-related auth routes here, to the router!
  // YOUR CODE HERE
  router.get('/', function(req, res, next) {
    (req.body.user) ? res.redirect('/contacts') : res.redirect('/login');
    next();
  });

  router.get('/signup', function(req, res) {
    res.render('signup')
  })

  router.post('/signup', function(req, res, next) {
    if ((req.body.username) && (req.body.password) && validateReq(req.body.password)) {
      var user = new User({
        username: req.body.username,
        password: req.body.password,
      })
      user.save(function(err,user){
        if(err){
          console.log(err)
        }
        if(user){
          res.redirect('/login');
        }
      })
    } else {
      res.sendStatus(400)
    }
  })

  router.get('/login', function(req, res) {
    res.render('login')
  })

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/contacts',
    failureRedirect: '/login'
  }))


  return router;
}
