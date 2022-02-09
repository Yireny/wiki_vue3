const STR = require('../models/strategys')

const str = async (req, res) => {
  const data = await STR.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

module.exports = {
  str
}