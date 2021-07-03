const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const admindata = require('./admin.js'); 

const router = express.Router();


router.get('/',(req,res,next)=>{
    console.log(admindata.products);
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;