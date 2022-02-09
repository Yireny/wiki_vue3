const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stageSchema = new Schema({
  id:{type:String},
  title:{type:String},
  chapter:{type:String},
  cover:{type:String},
  branch:{type:Array},
  hard:{type:Array},
  main:{type:Array},
  style:{type:Array},
  training:{type:Array},
})

module.exports = mongoose.model('stages',stageSchema)