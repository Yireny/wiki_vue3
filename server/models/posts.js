const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  id:{type:String},
  title:{type:String},
  theme:{type:String},
  date:{type:String},
  avatar:{type:String},
  name:{type:String},
  content:{type:String},
  img:{type:Array},
  view:{type:Number,default:0},
  reply:{type:Number,default:0},
  like:{type:Number,default:0}
})

module.exports = mongoose.model('posts',postSchema)