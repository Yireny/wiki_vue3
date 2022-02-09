var express = require('express');
var router = express.Router();
var info = require('../controller/info')


//获取角色信息
router.get('/info', info.info);


module.exports = router;
