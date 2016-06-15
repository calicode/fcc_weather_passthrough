// TODO - CHANGE API KEY IN .ENV TO NON PERSONAL. API REQ FUNCTION. REQ/DAY COUNTER. 
// process.env.API_KEY
'use strict'
var express = require('express');
var app = express();
var serverPort = process.env.PORT || 8080;
var http = require('http');
require('dotenv').load();
var latitude, longitude, apiUrl, reqCount;
reqCount = 0;
var baseUrl = "whatever.com";

function apiCall(lat, long, res) {
	apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + process.env.API_KEY;
	console.log(apiUrl);

	http.get(apiUrl, (response) => {

		response.on('data', (chunk) => {
			res.send(chunk.toString('ascii'));
		}).on('error', (e) => {
			console.log("error was", e.message);
		});
	});


};

app.listen(serverPort, () => {
	console.log("Server listening on ", serverPort);
});
app.get('/', function(req, res) {
	res.send("To use this application make a request such as " + baseUrl + " /weather/latitude/45/longitude/45");
});
app.get('/weather/latitude/:latitude/longitude/:longitude', function(req, res) {
	reqCount++;
	console.log('There have been ', reqCount, ' requests since the last restart');
	latitude = req.params.latitude;
	longitude = req.params.longitude;

	if (!isNaN(+latitude) && !isNaN(+longitude)) {
		apiCall(latitude, longitude, res);

	} else {

		res.json({
			result: "One of your values was not a number, you sent " + latitude + " " + longitude
		});
	}

});
