/*
* @Author: Shellin
* @Date:   2017-08-17 14:35:49
* @Last Modified by:   Shellin
* @Last Modified time: 2017-08-17 15:00:53
*/

//student/123456
//teacher/123
var http=require("http");

var server=http.createServer(function(req,res){
	//get url
	var userurl=req.url;
	res.writeHead(200,{
		"content-type":"text/html;charset:UTF-8"
	});

	if(userurl.substring(0,8)=="/student"){
		var studentid=userurl.substring(9);
		if (/^\d{10}$/.test(studentid)) {
			res.end("1"+studentid);
		}else{
			res.end("10");
		}
	}else if (userurl.substring(0,8)=="/teacher"){
		var teacherid=userurl.substring(9);
		if (/^\d{10}$/.test(teacherid)) {
			res.end("2"+teacherid);
		}else{
			res.end("20");
		}
	}else{
		res.end("123");
	}
});


server.listen(8000,"127.0.0.1");