const fs = require('fs');

const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title><head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
      }
    if (url === '/user') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title><head>');
        res.write('<body><ul><li>user 1</li><li>user 2</li></ul></body>');
        res.write('</html>');
        return res.end();
      }
    if(url === '/create-user' && method==='POST'){
      const body = [];
      req.on('data',(chunk)=>{
        body.push(chunk);
      });
       return req.on('close',()=>{
        const parsedBody =Buffer.concat(body).toString();
        const message =  parsedBody.split('=')[1];
        console.log(message);
      
          res.statusCode=302;
          res.setHeader('Location','/');
          res.end();
        
      });
    
    }
  
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some Hard coded Text',
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hard coded Text';


exports.handler = requestHandler;











   
 