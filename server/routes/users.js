var express = require('express');
var router = express.Router();
var user = require('../controller/users')


//获取用户信息
router.get('/users', user.users);
//注册
router.post('/register',user.register)
//登录
router.post('/login',user.login)

router.post('/addPost',user.addPost)
router.post('/addReply',user.addReply)
router.post('/addLike',user.addLike)


module.exports = router;
