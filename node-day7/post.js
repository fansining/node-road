var http=require("http");
var qs = require("querystring");

var server=http.createServer(function(req,res){
	//console.log(req);
	if(req.url=="/doPOST"&&req.method.toLowerCase()=="post"){
		// res.writeHead(400,{"Content--type":"text/html"});
		// console.log(req);
		

		var alldata="";
		//node为了追求极致，一小段一小段接受的
		req.addListener("data",function(chunk){
			alldata += chunk;
			console.log(alldata);
		});

		console.log(alldata);
		req.addListener("end",function(){
			var dataString=alldata.toString();
			var dataObj=qs.parse(dataString);
			console.log(dataObj);
			res.writeHead(200,{"Content--type":"text/html"});
			res.end("success");
		});
	}
	
});

server.listen(8000);


