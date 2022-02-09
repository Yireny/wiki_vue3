const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/wiki'


mongoose.connect(DB_URL)
const DB = mongoose.connection

DB.on('connected',()=>{
  console.log('数据库连接成功')
})
DB.on('error',()=>{
  console.log('数据库连接失败')
})

module.exports = mongoose