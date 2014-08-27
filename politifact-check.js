var request = require('request');
var escapeURL = require('querystring').escape;
var JQuery = require('cheerio');

var URL = "http://www.politifact.com";
var SEARCH = "/search/statements/?q=";

module.exports = function(keywords, callback){

    request(URL+SEARCH+escapeURL(keywords.join(" ")), function(error, res, body){
        var $ = JQuery.load(body);

        //now we can parse
        if($(".results").length > 0){
            var link = URL + $(".results a").attr("href");
            //TODO find the most relevant one
            request(link, function(error, res, body){
                var $ = JQuery.load(body);

                var truthiness = $("img.statement-detail").attr("alt");

                (callback || new Function())(truthiness, link);
            });
        }
    });
};