const express = require('express'),
    app = express(),
    bodyParser = require('body-parser')
    rootRouter = require('./router/root');
require('dotenv').config()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',rootRouter);

module.exports = app;