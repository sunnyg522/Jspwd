var http = require('http');
var readline = require('readline');
var server = http.createServer(function(req, res) {
  //res.writeHead(200);
  //res.end('Hello world');
  console.log('starting master server...');
  console.log('please select the type of operation which need to be performed');
  var rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Select operation type: 1.SUM, 2.SUB, 3.MUL", function(answer){

    consle.log("Selected item is", answer);
    rl.close();
  });
});
server.listen(8000);
