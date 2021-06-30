const express = require('express');

const app = express();

app.use('/users',(req,res,next)=>{
   res.send('<h1>Hi,user</h1>');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome</h1>');
 });

app.listen(3000);