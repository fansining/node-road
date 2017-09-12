var express=require('express');

var app=express();

app.get("/teacher/:id",function(req,res){
	var id=req.params["id"];

	var reg=/^[\d]{6}$/;
	if(reg.test(id)){
		red.send(id);
	}else{
		res.send("check it");
	}


	res.send(id);
});


app.listen(8000);