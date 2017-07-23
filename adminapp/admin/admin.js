let admin=require("express")();


admin.get("*",function(req,res,next){
	console.log("all request come to all section");
	next();
})




admin.param("id",function(req,res,next){
	console.log("param occured in admin section");
	next();
});


admin.get("/admin/:id",function(req,res,next){
	console.log("req",req.params);
	//next();
	res.send("hello this response come from admin section");
});

admin.get("/admin/:user",function(req,res,next){
	console.log("admin user section request is comming");
	res.send("hello this response come from admin user section");
})



admin.on("mount",function(parent){
	console.log("admin mounted");
});

module.exports=admin;