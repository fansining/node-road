var http  = require("http");
var qs = require("querystring");

// 创建服务器
var server = http.createServer(function(req,res) {
      console.log(req.method);
     if(req.url == "/doPost" && req.method.toLowerCase()== "post") {
     	  var alldata = "";
     	   // node为了追求极致 它是一个小段一个小段接受
     	   // 接受了一小段 可能就要给别人服务，防止一个过大的表单阻塞了整个进程
     	   req.addListener("data", function(chunk) {
                alldata += chunk;
     	   });

     	  // 全部传输完毕
     	  req.addListener("end",function() {
     	  	  console.log(typeof alldata);
                 var datastring = alldata.toString(); // name=123&sex=man
                 // 把字符串转成一个对象
                 var dataObj = qs.parse(datastring);
                 console.log(dataObj);
                 console.log(dataObj.name);
                 console.log(dataObj.sex);
     	  	  res.writeHead(200, {"Content-type":"text/plain;charset=UTF8"});
     	  	  res.end("success");
     	  });
     }
});

server.listen(4000,"127.0.0.1");