let marketing=require("express")();

marketing.get("/marketing",function(req,res,next){
	res.send("hello this response come from marketing section");
});

module.exports=marketing;