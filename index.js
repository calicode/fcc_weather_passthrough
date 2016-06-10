// TODO - CHANGE API KEY IN .ENV TO NON PERSONAL. API REQ FUNCTION. REQ/DAY COUNTER. 
// process.env.API_KEY
'use strict'
var express = require ('express'); 
var app = express();
var http = require('http');
var serverPort = process.env.PORT ||  8080;
require ('dotenv').load();
var latitude,longitude,apiUrl;



app.listen(serverPort, ()=> {console.log("Server listening on ", serverPort); } );
app.get('/weather/latitude/:latitude/longitude/:longitude', function (req,res){
latitude = req.params.latitude;
longitude = req.params.longitude;
		if (!isNaN(+latitude) && !isNaN(+longitude) ) {
		apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid='+process.env.API_KEY;
		console.log(apiUrl);
		
		http.get(apiUrl,(res)=>{
		    res.resume();
		    }).on('error', (e) => {
	              console.log(`Got error: ${e.message}`);
		}).on('data',(data) => { console.log(data);});
			
          } 
		else { 
			res.json({result:"One of your values was not a number, you sent "+ latitude+" "+ longitude}); 
		}

});
