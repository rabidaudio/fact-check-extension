var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.urlencoded() );

var _ = require('underscore');

var PolitifactCheck = require('./politifact-check');


//Create the AlchemyAPI object
var AlchemyAPI = require('./alchemyapi');
var alchemyapi = new AlchemyAPI();

var DEBUG = true;

var debug;
if(DEBUG){
	debug = console.log.bind(console);
}else{
	debug = new Function();
}



app.post('/truth_analysis', function(req, res){
	debug(req.body);

	if(!req.body.text) next(new Error("No text supplied"));

	alchemyapi.keywords('text', req.body.text, {keywordExtractMode: 'strict'}, function(response){
		var keywords = [];

		_.each(response.keywords, function(e, i, a){
			if(parseFloat(e.relevance) > 0.25){
				keywords.push(e.text);
			}
		});

		if(keywords.length < 0) next(new Error("No keywords found."));

		debug(keywords);

		PolitifactCheck(keywords, function(truthiness, link){
			debug(truthiness);
			res.json({
				truthiness: truthiness,
				url: link
			});
		});
	});
});


app.use(function(err, req, res, next){
	//error return
	if(err){
		debug(err);
		res.json({error: err.message});
	}else{
		next();
	}
});


app.listen(3000);
debug("Listening...");