const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});


var postSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  images: {
    type: Array
  },
  likes: {
    type: Array
  },
  content: {
    type: Object
  }
})

var User = mongoose.model('User', userSchema)
var Post = mongoose.model('Post', postSchema)

module.exports= {
  User: User,
  Post: Post
}
