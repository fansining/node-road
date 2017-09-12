function Student(name,sex,age){
	this.name=name;
	this.sex=sex;
	this.age=age;
}	

Student.prototype={
	sayHello:function(){
		console.log(this.name,this.sex,this.age);
	}
}

//对象的暴露方法：
module.exports=Student;
