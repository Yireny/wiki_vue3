var express = require('express');
var router = express.Router();
var stages = require('../controller/stages')

router.get('/stages', stages.stages);


module.exports = router;