var express = require('express');
var app = express();

var middleware = {
	reuireAuthenctication: function (req, res, next) {
		console.log('private route hits!');
		next();
	},
	logger: function (req, res, next) {
		
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.reuireAuthenctication, function (req, res) {
	res.send('About us');
});

app.use(express.static(__dirname+ '/public'));

app.listen(3000, function () {
	console.log('Express server started!');
});