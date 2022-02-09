const INFO = require('../models/info')

const info = async (req, res) => {
  const data = await INFO.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

module.exports = {
  info
}