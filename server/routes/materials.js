var express = require('express');
var router = express.Router();
var materials = require('../controller/materials')

router.get('/materials', materials.materials);


module.exports = router;