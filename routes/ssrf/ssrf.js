var express = require('express');
var router = express.Router();
const Response = require("../Response")
const requestIp = require("request-ip")

router.get("/",(req, res)=>{
    const r = new Response()
    const reqIP = requestIp.getClientIp(req).split(":")
    const trustServerIp = "192.168.5.132"
    // const trustServerIp = "127.0.0.1"
    if(reqIP[reqIP.length-1] !== trustServerIp){
        r.status = 400
        r.data = "your not my friend"

        return res.send(r)
    }

    return res.sendFile(process.cwd() + "/public/credential/user.txt")
})

module.exports = router;


