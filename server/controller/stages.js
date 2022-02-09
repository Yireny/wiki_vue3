const STAGE = require('../models/stages')

const stages = async (req, res) => {
  const data = await STAGE.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

module.exports = {
  stages
}