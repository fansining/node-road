/**
 * Created by Shellin on 2017/6/25.
 */
/**
 * Created by Shellin on 2017/6/25.
 */
var http=require('http');

var cheerio=require('cheerio')
var url='http://www.imooc.com/video/7965';

function filterChapters(html){
    var $=cheerio.load(html);
    var chapters=$('.learnchapter');


var courseData=[];
chapters.each(function(item){
    var chapter=$(this);
    var chapterTitle=chapter.find('strong').text();
    var video=chapter.find('video').children('li');
    var chapterData={
        chapterTitle:chapterTitle,
         videos:[];
    }

});

}

http
    .get(url,function(res){
        var html='';
        res.on(
            'data', function (data) {
                html+=data;
            });
        res.on('end',function(){
            filterChapters(html);
        });
    }).on('error', function () {
        consoloe.log("出错啦！");
    });