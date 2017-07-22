const express=require("express"),
app=express(),
path=require("path");
let mv=require("./middleware");

app.use(mv({}));

app.set('view engine', 'ejs');
app.set("views","./views");


// app.all("/",function(req,res,next){
// 	res.render("index",{ title: 'Hey', message: 'Welcome to ejs template engine'});
// });


// app.get("/user/:id",function(req,res,next){
// 	if(req.params.id==0)
// 		next('route');
// 	else
// 		next();
// },function(req,res,next){
// 	res.render("index",{ title: 'regular responce', message: 'Welcome to ejs template engine'});
// });



var options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['htm', 'html'],
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now())
	}
}

app.use('/',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/',express.static(path.join(__dirname, 'bower_components')));
app.use(express.static('public/html', options))


app.get("/user/:id",function(req,res,next){
	res.render("index",{ title: 'Special response', message: 'special response message'});
});



app.listen(3000,function(){
	console.log("nodejs server is running in port",3000);
});