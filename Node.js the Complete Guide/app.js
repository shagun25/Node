const express = require('express');

const app = express();

app.use('/user',(req,res,next)=>{
    res.send('<h1>This is user midware</h1>');
 });

app.use('/',(req,res,next)=>{
    res.send('<h1>This is / midware</h1>');
});

app.listen(3000);