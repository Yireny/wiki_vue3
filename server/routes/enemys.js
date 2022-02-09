var express = require('express');
var router = express.Router();
var enemy = require('../controller/enemys')

router.get('/enemys', enemy.enemys);


module.exports = router;