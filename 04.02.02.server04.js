var http = require('http');
var lanthu = 0;
function XuLyWEB(request, response) {
	lanthu++;
	response.writeHead(200, 
		{'Content-Type': 'text/html'}
	);
	response.end('Server V3 - Chao moi nguoi !' 
		+ "<BR> http://127.0.0.1:8080/ "
		+ "<BR> localhost:8080"
		+ "<BR> lan thu - " + lanthu
	);
	console.log("\n\t ...lan thu - " + lanthu);
}
http.createServer(XuLyWEB).listen(8080);
console.log("\n\tNodejs dang RUN o Server !");