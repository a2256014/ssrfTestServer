var express = require('express');
var router = express.Router();
/* GET home page. */
const ssrfRouter = require("../routes/ssrf")

router.use('/ssrf', ssrfRouter)

module.exports = router;
