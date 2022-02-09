const mongoose = require('mongoose')
const Schema = mongoose.Schema

const strSchema = new Schema({
  list:{type:Array},
  type:{type:String}
})

module.exports = mongoose.model('strategys',strSchema)