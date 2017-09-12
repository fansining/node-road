var formidable=require("formidable");
var http=require("http");


//创建服务器
var server=http.createServer(function(req,res){
	//就加入用户访问的是这个地址，并且请求的类型为post
	if(req.url=='/doPOST'&&req.method.toLowerCase()=="post"){
		var form = new formidable.IncomingForm();

		form.uploadDir="./upload";

		form.parse(req, function(err, fields, files) {

			if(err){
				throw err;
			}
			console.log(files,fields);
			res.writeHead(200, {'content-type': 'text/plain'});
			res.write('received upload:\n\n');
			res.end("ee");
     // res.end(util.inspect({fields: fields, files: files}));
 		});

		return;
	}
	
  // res.end(
  //   '<form action="/upload" enctype="multipart/form-data" method="post">'+
  //   '<input type="text" name="title"><br>'+
  //   '<input type="file" name="upload" multiple="multiple"><br>'+
  //   '<input type="submit" value="Upload">'+
  //   '</form>'
  //   );
});

server.listen(8000);