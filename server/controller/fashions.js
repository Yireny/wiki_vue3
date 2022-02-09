const FASHION = require('../models/fashions')

const fashions = async (req, res) => {
  const data = await FASHION.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

module.exports = {
  fashions
}