const mongoose = require('mongoose')
const Schema = mongoose.Schema

const replySchema = new Schema({
  id:{type:String},
  date:{type:String},
  avatar:{type:String},
  name:{type:String},
  content:{type:String},
  img:{type:Array},
  postId:{type:String},
  userId:{type:String}
})

module.exports = mongoose.model('replys',replySchema)
