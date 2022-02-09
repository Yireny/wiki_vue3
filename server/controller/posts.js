const POST = require('../models/posts')
const USER = require('../models/users')
const ID = require('../utils/createID')
const DATE = require('../utils/createDate')

const posts = async (req, res) => {
  const data = await POST.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

const publish = async(req,res)=>{
  let { title , theme , content , img }=req.body.params
  const user = await USER.find({
    id: req.body.params.id
  })
  POST.create({
    title,
    theme,
    content,
    img,
    id:ID(),
    date:DATE(),
    name:user[0].name,
    avatar:user[0].avatar
  })
}

const addView = async(req,res)=>{
  const post = await POST.find({
    id:req.body.params.id
  })
  console.log(post[0].view)
  POST.update({id: req.body.params.id}, {$set:{view:post[0].view + 1}}, (err, doc) => {
    if (err) console.log(err);
    console.log(doc)
  })
}

const addReply = async(req,res)=>{
  const post = await POST.find({
    id:req.body.params.postId
  })
  POST.update({id: req.body.params.postId}, {$set:{reply:post[0].reply + 1}}, (err, doc) => {
    if (err) console.log(err);
    console.log(doc)
  })
}


const addLike = async(req,res)=>{
  const post = await POST.find({
    id:req.body.params.id
  })
  POST.update({id: req.body.params.id}, {$set:{like:post[0].like + 1}}, (err, doc) => {
    if (err) console.log(err);
    console.log(doc)
  })
}



module.exports = {
  posts,
  publish,
  addView,
  addReply,
  addLike
}
