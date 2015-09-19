var express = require("express");
var serveStatic = require('serve-static');
var http = require("http");
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());

app.use(serveStatic("public"));

app.post("/calculate", function(request, response){
    
    var n1 = request.body.firstNumber;
    var n2 = request.body.secondNumber;
    var calc = n1 + n2;
    
    var obj = {result:calc};
    
    
    response.json(obj);
    
});


http.createServer(app).listen(3000);