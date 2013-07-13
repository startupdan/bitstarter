var express = require('express');

var app = express.createServer(express.logger());

console.log(fs.readFileSync('/myrepo/bitstarter/index.html', encoding));

app.get('/', function(request, response) {
  response.send('Hello World 3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
