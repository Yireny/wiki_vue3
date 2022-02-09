var express = require('express');
var router = express.Router();
var fashions = require('../controller/fashions')

router.get('/fashions', fashions.fashions);


module.exports = router;