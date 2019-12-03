var exp=require("express")
var app=exp();
var request=require("request")
var bo=require("body-parser")
app.use(bo.urlencoded({extended: true}));
var search=" ";
app.get("/search",function(req,res){
	res.render("search.ejs")
})
app.post("/results",function(req,res){
	search=req.body.movie;
	console.log(req.body)

	request("http://www.omdbapi.com/?s="+search+"&apikey=thewdb",function(e,r,b){
		
			var body=JSON.parse(b);
			res.render("results.ejs",{body:body});
		
		else
		{
			console.log('error occured')
		}
	})
})
app.listen("3000",function(){
	console.log("movie app started")
})