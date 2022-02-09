const ROLE = require('../models/roles')

const roles = async (req, res) => {
  const data = await ROLE.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

module.exports = {
  roles
}