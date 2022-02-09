const AVATAR = require('../models/avatars')

const avatars = async (req, res) => {
  const data = await AVATAR.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

module.exports = {
  avatars
}