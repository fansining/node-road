var  http = require("http");
var url = require("url");
var fs  = require("fs");
var path = require("path");

http.createServer(
	  function(req,res) {
          // 获取用户的路径
          //console.log(req.url);
          /*var  aa  = url.parse(req.url);
          console.log(aa);*/
          var pathname = url.parse(req.url).pathname;
          // 默认首页
          if(pathname == "/") {
          	   pathname = "index.html";
          }
          console.log(pathname);

           //扩展名
           var extname = path.extname(pathname);
          // 真正读取该文件
          fs.readFile("./static/"+pathname, function(err,data) {
                 if(err) {
                 	 // 若文件不存在，应该返回404
                 	 fs.readFile("./static/404.html",function(err,data) {
                          res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
                 	 	  res.end(data);
                 	 });
                 	 return;// 提前结束函数调用
                 }
                 //  MIMEl类型 
                 // 网页   text/html
                 // jpg文件  image/jpg
                 // 请求不同的文件  设置的类型也不一样
                 var mime = getMime(extname);
                 res.writeHead(200,{"Content-type":mime}); 
                 res.end(data);
          });
	  }
	).listen(4000,"127.0.0.1");

function getMime(extname) {
      switch(extname) {
      	  case ".html":
      	       return "text/html";
      	       break;
      	   case ".jpg":
                return "image/jpg";
                break;
           case ".css":
                 return "text/css";
                 break;     

      }
}