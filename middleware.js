module.exports=function(option){
	return function(req,res,next){
		// console.log("middle ware function called");
		next();
		//res.end("middleware fucntion end");
	}
}
