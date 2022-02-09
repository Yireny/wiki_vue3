const MATERICAL = require('../models/materials')

const materials = async (req, res) => {
  const data = await MATERICAL.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

module.exports = {
  materials
}