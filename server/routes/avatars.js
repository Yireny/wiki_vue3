var express = require('express');
var router = express.Router();
var avatar = require('../controller/avatars')

router.get('/avatar', avatar.avatars);


module.exports = router;