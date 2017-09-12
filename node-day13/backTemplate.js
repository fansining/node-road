
//前后端并不能很好的分离

//后端模板
var express=require("express");
var app=express();


//set template engine
app.set("view engine","ejs");

var sjk=[{
	"title":"title1",
	"time":"time1",
	"content":"<p>111</p>"
},
{
	"title":"title2",
	"time":"time2",
	"content":"<p>222</p>"
}];




app.get("/news/:id",function(req,res){
	//get id
	var id=req.params.id;
	console.log(id);
	res.render("index",sjk[id-1])
});

app.listen(8000);