

var http=require("http");
var qs=require("querystring");

var server=http.createServer(function(req,res){
	console.log(req.method);
	if(req.url=="/doPOST"&&(req.method.toLowerCase()=="post")){
		
		var allData="";
		req.addListener("data",function(chunk){
			allData+=chunk;
			console.log("allData");
		});

		req.addListener("end",function () {  
  			console.log(allData);
            var dataString = qs.parse(allData.toString());  
            res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});  
            res.write("name:"+dataString.name+"\n");  
            //res.write("password:"+dataString.password+"\n");  
            // res.write("sex:"+dataString.sex);  
            res.end("success!");  
        }) 
	}


})


server.listen(8000);