import express from 'express';
import path from 'path';
import config from '../webpack.config.js';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import schema from './graphql';

import UserModel from './models/UserModel'

var app = express();
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));
app.use('/public', express.static(__dirname + '/public'))

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true
})));

app.get('/postUser', (req, res) => {
    var user = new UserModel({ guid: '1234567', aka: 'Âgte 5', email: 'tuputamadre2@a.com', password: 'puta2' });
    user.save(function (err) {
        if (err) console.log(err);
        else console.log('saved');
    })
});

// Connect mongo database
mongoose.connect('mongodb://127.0.0.1:27017/productions', err => {
    if(err != undefined)
        console.log(err);
    else
        console.log("Database connected");

});

app.use('/', (req, res) => {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, (error) => {
    if (error) throw error;
    console.log("Express server listening on port", port);
});
