const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fashionSchema = new Schema({
  id:{type:String},
  name:{type:String},
  description:{type:String},
  painting:{type:String},
  sprite:{type:String},
  role:{type:String}
})

module.exports = mongoose.model('fashions',fashionSchema)