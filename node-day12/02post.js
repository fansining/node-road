var express=require("express");
var bodyParser=require("body-parser");

var app=express();

app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("form");
	res.end();
});


app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
	console.log(req.body);
});

app.listen(8000);