let adminapp=require("express")(),
admin=require("./admin/admin"),
sales=require("./sales/sales"),
marketing=require("./marketing/marketing");

adminapp.use(admin);
adminapp.use(sales);
adminapp.use(marketing);

// adminapp.get("/",function(req,res,next){
// 	res.send("hello this is adminapp section");
// });

// adminapp.get("/employee",function(req,res,next){
// 	res.send("hello this is employee section in adminapp app");
// });

module.exports=adminapp;