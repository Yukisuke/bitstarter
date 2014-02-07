/*
var fs = require('fs');
var buf = fs.readFileSync('./index.html');
    console.log(buf.toString());
*/

var express = require('express');
var app = express();
 app.use(express.logger());

var fs = require('fs');
var buf = fs.readFileSync('./index.html');
app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

