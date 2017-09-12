/*
* @Author: Shellin
* @Date:   2017-08-17 15:09:36
* @Last Modified by:   Shellin
* @Last Modified time: 2017-08-18 21:12:55
*/
var http=require("http");
var url=require("url");
var fs=require("fs");

var server=http.createServer(function(req,res){
	//url.parse();
	//console.log(req.url);
	//console.log(url.parse(req.url,true));
	if(req.url=="/favicon.ico"){
		return;
	}
	//res.writeHead(200,{"content-type":"text/plain;charset:UTF-8"});
	/*fs.readFile("./demo/2.txt",function(err,data){
		res.end(data);
	});*/
	//fs.mkdir("./test");
	/*fs.stat("./demo",function(err,data){
		console.log(data.isDirectory());
	});*/
//找出文件夹下所有的子文件夹
	var wjj=[];
	fs.readdir("./test",function(err,files){
		//console.log(files);
		for(var i=0;i<files.length;i++){
			var this_file=files[i];
			// console.log(this_file);
			// console.log(files[i]);
			fs.stat("./test/"+files[i],function(err,data){
				//console.log(data);
				if(data.isDirectory()){
					wjj.push(files[i]);
				}
			});

			console.log(wjj);
		}
	});
});

server.listen(8000);