var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Adding server started.....');
});
server.listen(8001);
