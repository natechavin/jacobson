var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var HTMLImport = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.writeHead(200, {
      'Content-type': 'text/html; charset=utf-8'
  });
  response.end(HTMLImport);
}); // <--- here close the function call

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
