//nodejs实现静态资源文件管理


var http=require("http");
var url=require("url");
var path=require("path");
var fs=require("fs");

var server=http.createServer(function (req,res) {
	var pathname=url.parse(req.url).pathname;
	//判断此时用户输入的地址是文件还是文件夹
	//如果是文件 直接读取 返回到客户端 如果是文件夹 子网访问还文件夹的首页
	//如果请求的是文件夹
	if(pathname.indexOf(".")==-1){
		pathname=pathname+"/index.html";
	}
	console.log(pathname);
	var fileUrl="./"+path.normalize("static/"+pathname);
	
	console.log(fileUrl);
	fs.readFile(fileUrl,function(err,data){
		if(err){
			res.writeHead(404,{"content-type":"text/html"});
			res.end("404 NOT FOUND!");
			return;
		}
		var extname=path.extname(pathname);
		console.log(extname);
		getMime(extname,function(mime){
			res.writeHead(200,{"Content-type":mime});
			res.end(data);
		});
	});

	//是文件
	//假定static为根目录，如果请求是是127.0.0.1:3000/images
	
}); 


server.listen(8000);

function getMime(extname,callback){
	fs.readFile("./mime.json",function(err,data){
		if(err){
			throw Error("not found!");
			return;
		}

		var mimeJson=JSON.parse(data);
		var mime=mimeJson[extname]||"text/plain";
		callback(mime);
	});
}