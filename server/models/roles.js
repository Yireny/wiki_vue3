const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema({
  id:{type:String},
  attribute:{type:Object},
  talent:{type:Array},
  logistics:{type:Array},
  name:{type:String},
  occupation:{type:String},
  painting:{type:Array},
  rarity:{type:String},
  skill:{type:Array},
  features:{type:String},
  avatar:{type:Array},
  fashion:{type:Array}
})

module.exports = mongoose.model('roles',roleSchema)