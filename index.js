// TODO - CHANGE API KEY IN .ENV TO NON PERSONAL. API REQ FUNCTION. REQ/DAY COUNTER. 
// process.env.API_KEY
'use strict'
var express = require ('express'); 
var app = express();
var serverPort = process.env.PORT ||  8080;
var http = require('http');
require ('dotenv').load();
var latitude,longitude,apiUrl;



app.listen(serverPort, ()=> {console.log("Server listening on ", serverPort); } );

app.get('/weather/latitude/:latitude/longitude/:longitude', function (req,res){

	latitude = req.params.latitude;
	longitude = req.params.longitude;

		if (!isNaN(+latitude) && !isNaN(+longitude) ) {
		apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid='+process.env.API_KEY;
		console.log(apiUrl);
		
	                //if (error || response.statusCode  !== 200) {console.log ("Problem with request", error, response.statusCode); res.end();} 
			//else { 
	       http.get(apiUrl, (response)=> {
	       response.on('data', (chunk)=> {res.send(chunk.toString('ascii')); });
	       });         
			
          } 
		else { 
			res.json({result:"One of your values was not a number, you sent "+ latitude+" "+ longitude}); 
		}

});
