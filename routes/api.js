var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
	//console.log("__dirname",__dirname);
	res.send("this is api response");
});


router.post("/",function(req,res){
	res.send("this is post response");
});


router.delete("/",function(req,res){
	res.send("this is delete response");
});


router.put("/",function(req,res){
	res.send("this is put response");
});


module.exports=router