
var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Hello World!' + request.query.foo);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

