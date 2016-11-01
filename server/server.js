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

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true
})));

app.get('/postUser', (req, res) => {
    var user = new UserModel({ guid: '123456', aka: 'Âgte 4', email: 'tuputamadre@a.com', password: 'puta' });
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
    {
        console.log("Database connected");
    }

});

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/', (req, res) => {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
