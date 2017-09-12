/*
* @Author: Shellin
* @Date:   2017-08-17 13:48:09
* @Last Modified by:   Shellin
* @Last Modified time: 2017-08-17 14:31:55
*/
var http=require("http");
var url=require("url");

var server=http.createServer(function(req,res){
	//url.parse();
	//console.log(req.url);
	//console.log(url.parse(req.url,true));
	if(req.url=="/favicon.ico"){
		return;
	}
	var query=url.parse(req.url,true).query;
	var name=query.name;
	var age=query.age;
	var sex=query.sex;
	console.log(name,age,sex);
	res.end();
});

server.listen(8000);