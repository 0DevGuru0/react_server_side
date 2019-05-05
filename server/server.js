import express from 'express';
import bodyParser from 'body-parser';
import proxy from 'express-http-proxy';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import webpack from 'webpack';
import expressStaticGzip from 'express-static-gzip';
import webpackClientConfig from '../config/webpack.client';
import webpackServerConfig from '../config/webpack.prod.server';

const app = express()

app.use(helmet())

app.use(cookieParser())

app.use('/api',proxy('http://localhost:5000', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use('/',expressStaticGzip('./public',{
  enableBrotli:true,
  orderPreference: ['br']
}));




const compiler = webpack([webpackClientConfig,webpackServerConfig])
const webpackDevMiddleware =  require('webpack-dev-middleware')(compiler,{serverSideRender: true})
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const webpackHotMiddleware =  require('webpack-hot-middleware')(compiler)
app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)
app.use(webpackHotServerMiddleware(compiler));

const render = require('../build/server-bundle.js').default;

app.use(render())

require('dotenv').config()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



export default app;