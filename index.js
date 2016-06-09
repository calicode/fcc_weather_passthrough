'use strict'
var express = require ('express'); 
var app = express();
var serverPort = process.env.PORT ||  8080;
var latitude,longitude;
app.listen(serverPort, ()=> {console.log("Server listening on ", serverPort); } );

app.get('/weather/latitude/:latitude/longitude/:longitude', function (req,res){
latitude = req.params.latitude;
longitude = req.params.longitude;
if (!isNaN(+latitude) && !isNaN(+longitude) ) { res.end("you sent 2 numbers, great"); } else { res.send("One of those can't be converted to a number"+ latitude+" "+ longitude); }

});
