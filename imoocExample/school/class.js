/**
 * Created by Shellin on 2017/6/15.
 */
var student=require('./student');
var teacher=require('./teacher');

teacher.add('Shellin');

function add(tName,sName){
    teacher.add(tName);
    sName.forEach(function(item,index){
        student.add(item);
    })


}

exports.add=add
//module.exports=add