var express = require('express');
var router = express.Router();
var str = require('../controller/strategys')


//获取角色信息
router.get('/strategy', str.str);


module.exports = router;
