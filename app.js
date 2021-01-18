#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 8080 );

app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/:page',function(req,res){
	console.log("Error Page Not Found");
	res.send({"Message": "Error Page Not Found", "Code": "404"});
});

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
