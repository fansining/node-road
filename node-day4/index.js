var http=require("http");

var fs=require("fs");

var server=http.createServer(function (req,res) {
	
	if(req.url=='/favicon.ico'){
		return;
	}
	//fs.mkdir("./demo");
	
	fs.stat("./demo",function(err,data){
		var is=data.isDirectory();
		console.log(is);
	});



	res.end();

});

server.listen(8000,"127.0.0.1");