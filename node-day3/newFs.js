var http = require("http");
var fs = require("fs");

var server = http.createServer(
	function(req,res) {
		if(req.url == "/favicon.ico") {
			return;
		}
      fs.readdir("./test",function(err,files) {
          //  存放文件夹的数组
          var wjj = [];
          iterator(0);
          function iterator(i) {
              // 做个临界值的判断
              if(i == files.length) {
                 console.log(wjj);
                 return;
              }

             // 检测序号为i的文件(或文件夹)
             fs.stat("./test/"+files[i],function(err,data) {
                   // 检测成功后做的事情
                   if(data.isDirectory()) {
                        wjj.push(files[i]);
                   }

                   iterator(i+1);

             });
          }

      });
       
         res.end();

       });

server.listen(3000,"127.0.0.1");