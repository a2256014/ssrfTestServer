var express = require('express');
var router = express.Router();
/* GET home page. */
const ssrfRouter = require('./ssrf')

router.use('/', ssrfRouter)

module.exports = router;