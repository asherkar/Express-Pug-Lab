var express = require('express');
var app = express();

app.set('views','./views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render("home",{title:"Home"});
});

app.get('/about',function(req,res){
	res.render("about",{ title:'about'});
});

app.get('/home',function(req,res){
	res.render("home",{ title:'home'})
});

app.get('/random',function(req,res){
	res.render("random",{ title:'random'})
});

app.listen(8080,function(){
	console.log('Running on 8080');
});