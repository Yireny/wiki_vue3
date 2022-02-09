const ENEMY = require('../models/enemys')

const enemys = async (req, res) => {
  const data = await ENEMY.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

module.exports = {
  enemys
}