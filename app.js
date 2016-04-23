var React = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var app = express();

var modules = {timepicker: require('rc-time-picker'),
               search: require('apeman-react-search').ApSearch};

var render = function (response, props, module) {
  var Factory = React.createFactory(module);
  var instance = Factory(props);
  var fragment = ReactDOMServer.renderToStaticMarkup(instance);
  response
    .type("text/plain")
    .send(fragment);
};

app.get('/:module', function (request, response) {
  render(response, request.query, modules[request.params.module]);
});

app.listen(3000, function () {
  console.log('Cakebox is listening on port 3000.');
});
