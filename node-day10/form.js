var express=require('express');

var app=express();

app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("form");
});


app.post("/",function(req,res){
	res.end("success");
});

app.listen(8000);