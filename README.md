Cakebox
=======

This is an experimental render server for React components. Components are added via NPM modules in `package.json`
and then accessed via HTTP. Props are supplied as query parameters.

    node app.js
    curl http://localhost:3000/timepicker
    curl http://localhost:3000/search/ApSearch?value=foo
    browse to http://localhost:3000/image/?content=https://pbs.twimg.com/profile_images/438732070521556992/BtHxrJUR_400x400.png

There is every possibility that this implementation could suffer from injection attacks or performance problems. Please
only use it if you know what you are doing.
