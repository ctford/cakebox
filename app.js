
var express = require('express');
var app = express();

app.get('/:module/:component', function (request, response) {
  response.send('Module: ' + request.params.module + 'Component: ' + request.params.component + request.query.foo);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

