var React = require('react');
var ReactDOMServer = require('react-dom/server');

var comment = {commentBox:
    React.createClass({displayName: 'CommentBox',
      render: function() {
        return (
          React.createElement('div', {className: "commentBox"},
            "Hello, world! I am a " + this.props.name
          )
        );
      }
})};

var modules = {comment: comment};
var express = require('express');
var app = express();

// List the components available for the module.
app.get('/:module', function (request, response) {
  var module = modules[request.params.module];
  response.send(Object.keys(module));
});

// Render the specified component.
app.get('/:module/:component', function (request, response) {
  var Factory = React.createFactory(modules[request.params.module][request.params.component]);
  var component = Factory(request.query);
  response.send(ReactDOMServer.renderToStaticMarkup(component));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
