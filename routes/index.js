var express = require('express');
var router = express.Router();
var models = require('../models/models');
var Contact = models.Contact;

/* GET home page. */
router.get('/contacts', function(req, res) {
  // console.log(Contact.find())
  console.log(Contact)
  Contact.find()
  // .populate('owner')
  .exec(function(err, eachContacts) {
    if (err) {
      console.log("error: ", err);
      res.send(500);
    } else {
      console.log(eachContacts)
      res.render('contacts', {
        contacts : eachContacts
      })
    }
  })
});


router.get('/contacts/new', function(req, res) {
  res.render('editContact') // must render with no contact
});

router.get('/contacts/:id', function(req, res) {
  Contact.findById(id, function(err, id) {
    if (err) {
      console.log(err)
    } else {
      res.render('editContact', {
        id : this._id
      })
    }
  })
});

//   mongoose.Schema.ObjectId //correct? must read contact with id from mongoose
//   res.render('/editContact') // must render with contact
// })

router.post('/contacts/new', function(req, res) {
  var contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    owner: req.body.owner,
  })
  contact.save(function(err, contact) {
    if (err) {
      console.log(err)
    }
    if (contact) {
      res.redirect('/contacts/new')
    }
  })
})

router.post('/contacts/:id', function(req, res) {
  var id = user._id;
// need to update contact
  res.redirect('/contacts')
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



module.exports = router;
