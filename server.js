"use strict"
var express= require('express');
var app = express();
var path = require('path');
var port = 3000;

app.use(express.static('public'));
app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
} )
app.listen(port, function() {
	console.log('app is listening on port: ', port);
})
