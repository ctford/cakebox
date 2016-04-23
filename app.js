var React = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var app = express();

var modules = {timepicker: require('rc-time-picker')};

app.get('/:module', function (request, response) {
  var Factory = React.createFactory(modules[request.params.module]);
  var component = Factory(request.query);
  var fragment = ReactDOMServer.renderToStaticMarkup(component);
  response
    .type("text/plain")
    .send(fragment);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
