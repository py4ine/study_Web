const http = require('http');

const server = http.createServer((req, res) => {
  console.log('클라이언트로부터 요청을 받음');
  console.log(req.method, req.url);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>It Works!</h1>');
  res.end();  // 끝 표시
});

server.listen(3000, () => {  // 구동시작
  console.log('Server running at http://localhost:3000/');
});