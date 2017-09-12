/**
 * Created by Shellin on 2017/6/25.
 */
var http=require('http');

http
    .createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/plain' });
        res.write('hello');
        res.end();
    })
    .listen(2015);