const http = require('http');

const options = {
  hostname: 'localhost',
  port: '7777',
  path: '/',
  method: 'get',
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
    'Content-Length': 16,
  }
};


const req = http.request(options);

req.on('response', (res) => {
  console.log(res);
  res.on('data', chunk => console.log(chunk.toString()));
});

// req.end('name=haha&age=18');
req.end(`{"name": "haha"}`);