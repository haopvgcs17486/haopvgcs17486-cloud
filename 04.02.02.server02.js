
var http = require('http');
var lanthu = 0;

http.createServer(function (request, response) {
	lanthu++;
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('Chao moi nguoi !' 
		+ "<BR> http://127.0.0.1:8080/ "
		+ "<BR> localhost:8080"
		+ "<BR> lan thu - " + lanthu
	);
}).listen(8080);

console.log("Nodejs dang RUN o Server !");