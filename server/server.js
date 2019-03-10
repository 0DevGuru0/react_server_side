import  express from 'express';
import  bodyParser from 'body-parser';
import  rootRouter from './router/root';

const app = express()
require('dotenv').config()
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',rootRouter);

export default app;