var express = require('express');
var router = express.Router();
var role = require('../controller/roles')

// var register = require('../controller/users')

//获取角色信息
router.get('/roles', role.roles);


module.exports = router;
