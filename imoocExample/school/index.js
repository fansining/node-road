/**
 * Created by Shellin on 2017/6/15.
 */



var kclass=require('./class');




exports.add=function(lclasses){
    kclasses.forEach(function(item,index){
        var _klass=item;
        var tName=item.tName;
        var students=item.sName;
        kclass.add(tName,students);

    })
}