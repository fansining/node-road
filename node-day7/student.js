function student(name,sex,age){
	this.name=name;
	this.sex=sex;
	this.age=age;
}	

student.prototype={
	sayHello:function(){
		console.log(this.name,this.sex,this.age);
	}
}


module.exports=student;
   