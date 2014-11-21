var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Multiplication server started...');
});
server.listen(8003);
