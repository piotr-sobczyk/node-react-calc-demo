var express = require("express");
var serveStatic = require('serve-static');
var http = require("http");
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());

app.use(serveStatic("public"));

app.post("/calculation", function(request, response){
    
    var n1 = request.body.firstNumber;
    
    console.log(n1);
    
    response.json(n1);
    
});


http.createServer(app).listen(3000);