var http = require('http');
var fs = require('fs');
function onRequest( req, res) {
  console.log('A user request');
  response.writeHead(200, {'Context-Type': 'text/plain'});
  response.write('Error 404! Page Not found.');
  response.end();
}
http.createServer(onRequest).listen(3000);
console.log('server is now running on port 3000');
