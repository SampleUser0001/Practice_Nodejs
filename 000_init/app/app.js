const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}).listen(port);
// listen(3000)を書かないとホストからアクセスできない

console.log(`Server running at http://${hostname}:${port}/`);
// 下記にしてしまうと起動に失敗する。
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });