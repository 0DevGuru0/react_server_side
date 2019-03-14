import  express from 'express';
import  bodyParser from 'body-parser';
import  rootRouter from './routes/root';
import proxy from 'express-http-proxy';
const app = express()

app.use(
    '/api',
    proxy('http://localhost:5000', {
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
      }
    })
  );

require('dotenv').config()
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',rootRouter);

export default app;