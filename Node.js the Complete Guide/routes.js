const fs = require('fs');

const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  
    if(url === '/message' && method==='POST'){
      const body = [];
      req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
      });
       return req.on('close',()=>{
        const parsedBody =Buffer.concat(body).toString();
        console.log(parsedBody);
        const message =  parsedBody.split('=')[1];
        console.log(message);
        fs.writeFileSync('message.txt',message,(err)=>{
          res.statusCode=302;
          res.setHeader('Location','/');
          return res.end();
        });
      });
    
    }
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<Head><Title>My First Page</Title></Head>');
    res.write('<Body><h1>Hello Node.js!!</h1></Body>');
    res.write('</html>');
    res.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some Hard coded Text',
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hard coded Text';


exports.handler = requestHandler;
exports.someText = 'Some Hard coded Text';


