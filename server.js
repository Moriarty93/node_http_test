const http = require('http');
const queryString = require('querystring');

const server = http.createServer();

server.on('request', (req, res) => {
  const contentType = req.headers['content-type'];
  let buffers = [];

  req.on('data', chunk => {
    buffers.push(chunk);
  });

  req.on('end', () => {
    const content = Buffer.concat(buffers).toString();
    if(contentType === 'application/json') {
      console.log(JSON.parse(content).name);
    } else if(contentType === 'application/x-www-form-urlencoded') {
      console.log(queryString.parse(content).name);
    }
    res.end('http end');
  });
});

server.listen(7777);