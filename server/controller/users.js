const USER = require('../models/users')
const ID = require('../utils/createID')

const users = async (req, res) => {
  const data = await USER.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

const register = (req,res)=>{
  let { name , password } = req.body.params
  USER.create({
    name,
    password,
    id: ID()
  })
}

const login = async (req,res)=>{
  const user = await USER.find({
    id:req.body.params.id
  })
  if(!user.length){
    console.log('该用户不存在')
    return res.json({
      status:1002,
      data:'',
      msg:'该用户不存在'
    })
  }else{
    if(user[0].id == req.body.params.id && user[0].password == req.body.params.password){
      console.log('登录成功')
      return res.json({
        status:1000,
        data:user[0],
        msg:'登录成功'
      })
    }else {
      console.log('账号或密码错误')
      return res.json({
        status:1001,
        data:'',
        msg:'账号或密码错误'
      })
    }
  }
}

const addPost = async(req,res)=>{
  const user = await USER.find({
    id:req.body.params.id
  })
  USER.update({id: req.body.params.id}, {$set:{post:user[0].post + 1}}, (err, doc) => {
    if (err) console.log(err);
    console.log(doc)
  })
}

const addReply = async(req,res)=>{
  const user = await USER.find({
    id:req.body.params.id
  })
  USER.update({id: req.body.params.id}, {$set:{reply:user[0].post + 1}}, (err, doc) => {
    if (err) console.log(err);
    console.log(doc)
  })
}

const addLike = async(req,res)=>{
  const user = await USER.find({
    id:req.body.params.id
  })
  USER.update({id: req.body.params.id}, {$set:{like:user[0].post + 1}}, (err, doc) => {
    if (err) console.log(err);
    console.log(doc)
  })
}

module.exports = {
  users,
  register,
  login,
  addPost,
  addReply,
  addLike
}