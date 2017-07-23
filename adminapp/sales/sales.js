let sales=require("express")();

sales.get("/sales",function(req,res,next){
	res.send("hello this response come from sales section");
});

module.exports=sales;