const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enemySchema = new Schema({
  id:{type:String},
  attribute:{type:Object},
  name:{type:String},
  features:{type:String},
  avatar:{type:String},
  type:{type:String},
  race:{type:String}
})

module.exports = mongoose.model('enemys',enemySchema)