// var express=require("express");

// var app=express();
// var sjk=[{
// 	"title":"title1",
// 	"time":"time1",
// 	"content":"<p>111</p>"
// },
// {
// 	"title":"title2",
// 	"time":"time2",
// 	"content":"<p>222</p>"
// }];
// app.use(express.static("./public"));

// app.get("/news",function(req,res){
// 	res.json(sjk);
// });

// app.listen(8000);
// 
// 
// 


var express = require("express");
var app = express();

var sjk = [
      {
      	"biaoti": "我是第一条新闻呀",
      	 "shijian": "2017-09-06",
      	 "neirong": "<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>"
      },
      {
      	"biaoti": "我是第二条新闻呀",
      	 "shijian": "2017-09-06",
      	 "neirong": "<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>"
      },

      {
      	"biaoti": "我是第三条新闻呀",
      	 "shijian": "2017-09-06",
      	 "neirong": "<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>"
      }

 ];
app.use(express.static("./public"));

app.get("/news", function(req,res) {
     res.json(sjk);
});
app.listen(3000);