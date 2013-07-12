

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(getMessage);
  console.log("message:" + getMessage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var fs = require('fs');
var getMessage = function(){
  var data = fs.readFileSync("index.html");
  var message = data.toString('utf-8');
  return message; 
};
