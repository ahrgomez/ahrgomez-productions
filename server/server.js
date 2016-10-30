var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var graphqlHTTP = require('express-graphql');
var mongoose = require('mongoose');

var app = express();

var schema = require('./graphql');

// GraphqQL server route
app.use('/graphql', graphqlHTTP({
    schema,
    pretty: true
}));

// Connect mongo database
mongoose.connect('mongodb://localhost/productions');

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
