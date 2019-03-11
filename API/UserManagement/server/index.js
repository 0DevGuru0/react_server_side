import express      from 'express';
import session      from 'express-session';
import MongoConnect from 'connect-mongo';
import mongoose     from 'mongoose';
import bodyParser   from 'body-parser';
import passport     from 'passport';
import path         from 'path'

import userRouter from '../router/userRouter';
import rootRouter from '../router/rootRouter';

require('../services/passport');

const app = express();
/////////////////START APP MIDDLEWARE///////////////////////////
require('dotenv').config({
    path:path.resolve(process.cwd(),'config/keys/.env')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
/////////////////END APP MIDDLEWARE///////////////////////////

/////////////////START DATABASE CONFIG///////////////////////////
mongoose.connect(process.env.DB_ADDRESS,{ useNewUrlParser: true });
mongoose.connection.on('connected'   ,()=>{console.log("connection established successfully")});
mongoose.connection.on('error'       ,(err)=>{console.log('connection to mongo failed ' + err)});
mongoose.connection.on('disconnected',()=>{console.log('mongo db connection closed')})
mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;
/////////////////END DATABASE CONFIG///////////////////////////

const MongoStore = MongoConnect(session);
app.use(session({
    secret:process.env.SESSION_SECRET_KEY,
    saveUninitialized:false,
    store:new MongoStore({
        url:process.env.DB_SESSION_STORE,
        ttl: 2 * 24 * 60 * 60,
        autoReconnect: true
    }),
    resave:false
}))

app.use(passport.initialize())
app.use(passport.session())
////////////////START ROUTER CONFIG///////////////////////////
app.use('/user',userRouter)
app.use('/',rootRouter)
/////////////////END ROUTER CONFIG///////////////////////////

export default app;