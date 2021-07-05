const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const admindata = require('./admin.js'); 

const router = express.Router();

router.get('/',(req,res,next)=>{
    const products = admindata.products;
    res.render('shop',{prods: products, pageTitle: 'shop',path: '/'});
});

module.exports = router;