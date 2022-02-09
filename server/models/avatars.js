const mongoose = require('mongoose')
const Schema = mongoose.Schema

const avatarSchema = new Schema({
  avatar:{type:Array}
})

module.exports = mongoose.model('avatars',avatarSchema)