const mongoose = require('mongoose')
const Schema = mongoose.Schema

const infoSchema = new Schema({
  news:{type:Array},
  swiper:{type:Array},
  banner:{type:String},
  topic:{type:Array}
})

module.exports = mongoose.model('information',infoSchema)