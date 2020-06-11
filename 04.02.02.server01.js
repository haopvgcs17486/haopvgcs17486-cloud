
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Chao moi nguoi !' 
  + " http://127.0.0.1:8080/ "
  + " localhost:8080"
  );
}).listen(8080);

console.log("Nodejs dang RUN o Server !");