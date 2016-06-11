var request = require('request');
var urlT = 'http://api.openweathermap.org/data/2.5/weather?lat=45&lon=45&appid=ad3f6302b521ec5dd19161a220e1fa2b';
var http = require ('http');

request(urlT,function(error,response,body){

		console.log(body);
		
		});
http.get(urlT, (res)=>{
res.on('data', (chunk)=>{console.log(chunk.toString('ascii'));});

});
