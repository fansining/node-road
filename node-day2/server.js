

var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){

	if(req.url=="/demo/index.html"){
		fs.readFile("./demo/index.html",function(err,data){
			res.writeHead(200,{"content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});     
	}else if (req.url=="/demo/index.css") {
		fs.readFile("./demo/index.css",function(err,data){
			res.writeHead(200,{"content-type":"text/css;charset=UTF-8"});
			res.end(data);
		});    
	}else if (req.url="/demo/img/1.jpg") {
		fs.readFile("./demo/img/1.jpg",function(err,data){
			res.writeHead(200,{"content-type":"image/jpeg"});
			res.end(data);
		});    
	}else if (req.url="/demo/img/2.jpg") {
		fs.readFile("./demo/img/2.jpg",function(err,data){
			res.writeHead(200,{"content-type":"image/jpeg"});
			res.end(data);
		});    
	}

	
});
server.listen(8000);


console.log("232");