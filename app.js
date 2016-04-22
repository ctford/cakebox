var React = require('react');
var ReactDOMServer = require('react-dom/server');

var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a " + this.props.name
      )
    );
  }
});
var comment = {commentBox: CommentBox};

var express = require('express');
var app = express();

app.get('/:module/:component', function (request, response) {
  var Factory = React.createFactory(comment.commentBox);
  var component = Factory(request.query);
  response.send(ReactDOMServer.renderToStaticMarkup(component));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
