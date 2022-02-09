const REPLY = require('../models/reply')
const USER = require('../models/users')
const ID = require('../utils/createID')
const DATE = require('../utils/createDate')


const reply = async (req, res) => {
  const data = await REPLY.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

const postReply = async (req, res) => {
  const data = await REPLY.find({
    postID:req.body.params.postID
  })
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

const userReply = async(req,res)=>{
  const data = await REPLY.find({
    userID:req.body.params.userID
  })
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}


const comment = async(req,res)=>{
  let { content , img , postId ,userId}=req.body.params
  const user = await USER.find({
    id:req.body.params.userId
  })
  REPLY.create({
    content,
    img,
    postId,
    id:ID(),
    date:DATE(),
    name:user[0].name,
    avatar:user[0].avatar,
    userId:userId
  })
}


module.exports = {
  reply,
  postReply,
  userReply,
  comment
}