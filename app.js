var React = require('react');
var ReactDOMServer = require('react-dom/server');

var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )
    );
  }
});

var CreateCommentBox = React.createFactory(CommentBox);

var express = require('express');
var app = express();

app.get('/:module/:component', function (request, response) {
  response.send(ReactDOMServer.renderToString(CreateCommentBox()));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

