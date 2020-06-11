var http = require('http');
var url = require('url');
var lanthu = 0;
//const PORT = process.env.PORT || 5000
PORT = 8080;

function parsePARAM(xurl)
{
	var q = url.parse( xurl, true).query;
	return (" Ngay " + q.ngay 
		+ " Thang "  + q.thang 
		+ " Nam " + q.nam);
}

function XuLyWEB(request, response) {
	lanthu++;
	response.writeHead(200, 
		{'Content-Type': 'text/html'}
	);
	response.end('Parameters V1 - !' 
		+ "<BR> lan thu - " + lanthu
		+ "<BR> URL - " + request.url
		+ "<BR> Cac THAM SO - " + parsePARAM(request.url)
	);
	console.log("\n\t ...lan thu - " + lanthu);
}
http.createServer(XuLyWEB).listen(PORT);
console.log("\n\tNodejs dang RUN o Server !");