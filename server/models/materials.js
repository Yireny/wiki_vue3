const mongoose = require('mongoose')
const Schema = mongoose.Schema

const materialSchema = new Schema({
  id:{type:String},
  name:{type:String},
  description:{type:String},
  img:{type:String},
  use:{type:String},
  grade:{type:String}
})

module.exports = mongoose.model('materials',materialSchema)