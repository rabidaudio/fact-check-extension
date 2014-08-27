var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );


//Create the AlchemyAPI object
var AlchemyAPI = require('./alchemyapi');
var alchemyapi = new AlchemyAPI();



app.post('/truth_analysis', function(req, res){
	console.log(req.body);
});




app.listen(3000);
console.log("Listening...");



// function entities(req, res, output) {
// 	alchemyapi.entities('text', demo_text,{ 'sentiment':1 }, function(response) {
// 		output['entities'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response['entities'] };
// 		keywords(req, res, output);
// 	});
// }


// function keywords(req, res, output) {
// 	alchemyapi.keywords('text', demo_text, { 'sentiment':1 }, function(response) {
// 		output['keywords'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response['keywords'] };
// 		concepts(req, res, output);
// 	});
// }


// function concepts(req, res, output) {
// 	alchemyapi.concepts('text', demo_text, { 'showSourceText':1 }, function(response) {
// 		output['concepts'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response['concepts'] };
// 		sentiment(req, res, output);
// 	});
// }


// function sentiment(req, res, output) {
// 	alchemyapi.sentiment('html', demo_html, {}, function(response) {
// 		output['sentiment'] = { html:demo_html, response:JSON.stringify(response,null,4), results:response['docSentiment'] };
// 		text(req, res, output);
// 	});
// }


// function text(req, res, output) {
// 	alchemyapi.text('url', demo_url, {}, function(response) {
// 		output['text'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
// 		author(req, res, output);
// 	});
// }


// function author(req, res, output) {
// 	alchemyapi.author('url', demo_url, {}, function(response) {
// 		output['author'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
// 		language(req, res, output);
// 	});
// }


// function language(req, res, output) {
// 	alchemyapi.language('text', demo_text, {}, function(response) {
// 		output['language'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response };
// 		title(req, res, output);
// 	});
// }


// function title(req, res, output) {
// 	alchemyapi.title('url', demo_url, {}, function(response) {
// 		output['title'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
// 		relations(req, res, output);
// 	});
// }


// function relations(req, res, output) {
// 	alchemyapi.relations('text', demo_text, {}, function(response) {
// 		output['relations'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response['relations'] };
// 		category(req, res, output);
// 	});
// }


// function category(req, res, output) {
// 	alchemyapi.category('text', demo_text, {}, function(response) {
// 		output['category'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response };
// 		feeds(req, res, output);
// 	});
// }


// function feeds(req, res, output) {
// 	alchemyapi.feeds('url', demo_url, {}, function(response) {
// 		output['feeds'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response['feeds'] };
// 		microformats(req, res, output);
// 	});
// }


// function microformats(req, res, output) {
// 	alchemyapi.microformats('url', demo_url, {}, function(response) {
// 		output['microformats'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response['microformats'] };
// 		taxonomy(req, res, output);
// 	});
// }


// function taxonomy(req, res, output) {
// 	alchemyapi.taxonomy('url', demo_url, {}, function(response) {
// 		output['taxonomy'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
// 		combined(req, res, output);
// 	});
// }

// function combined(req, res, output) {
// 	alchemyapi.combined('url', demo_url, {}, function(response) {
// 		output['combined'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
// 		image(req, res, output);
// 	});
// }

// function image(req, res, output) {
// 	alchemyapi.image('url', demo_url, {}, function(response) {
// 		output['image'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
// 		image_keywords(req, res, output);
// 	});
// }

// function image_keywords(req, res, output) {
// 	alchemyapi.image_keywords('url', demo_url, {}, function(response) {
// 		output['image_keywords'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
// 		res.render('example',output);
// 	});
// }

