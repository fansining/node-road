var express=require('express');

var app=express();

app.get("/",function (req,res) {
	// body...
	res.end("hello world");
});

app.get("/haha",function(res,res){
	res.end("haha");
});




app.listen(3000);
