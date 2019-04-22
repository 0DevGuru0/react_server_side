import express from 'express';
import bodyParser from 'body-parser';
// import rootRouter from './routes/root';
import proxy from 'express-http-proxy';
import cookieParser from 'cookie-parser';
// import devMiddleware from 'webpack-dev-middleware';
// import hotMiddleware from 'webpack-hot-middleware';
import webpackClientConfig from '../config/webpack.client';
// import webpackServerConfig from '../config/webpack.server';
import webpackServerConfig from '../config/webpack.prod.server';
import expressStaticGzip from 'express-static-gzip';
// import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import webpack from 'webpack'

const app = express()

app.use(cookieParser())

app.use('/api',proxy('http://localhost:5000', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));


const compiler = webpack(webpackClientConfig);
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler)
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)
app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)


// webpack([
//   webpackClientConfig
// ]).run((err,stats)=>{
  const render = require('../build/server-bundle.js').default;
  app.use(expressStaticGzip('./public',{
    enableBrotli:true,
    orderPreference: ['br', 'gz']
  }));
  app.use(render())
// })



require('dotenv').config()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



export default app;