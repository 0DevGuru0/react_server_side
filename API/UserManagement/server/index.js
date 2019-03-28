import express      from 'express';
import mongoose     from 'mongoose';
import bodyParser   from 'body-parser';
import passport     from 'passport';
import path         from 'path';
import cookieSession from 'cookie-session'
import cookieParser from 'cookie-parser'
import cors         from 'cors';

import userRouter from '../routes/userRouter';
import rootRouter from '../routes/rootRouter';

import expressGraphql from 'express-graphql';
import schema         from '../schema';

require('../services/passport');

/////////////////START DATABASE CONFIG///////////////////////////
mongoose.connect(process.env.DB_ADDRESS,{ useNewUrlParser: true });
mongoose.connection.on('connected'   ,()=>{console.log("connection established successfully")});
mongoose.connection.on('error'       ,(err)=>{console.log('connection to mongo failed ' + err)});
mongoose.connection.on('disconnected',()=>{console.log('mongo db connection closed')})
mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;
/////////////////END DATABASE CONFIG///////////////////////////
const app = express();
/////////////////START APP MIDDLEWARE///////////////////////////
require('dotenv').config({
    path:path.resolve(process.cwd(),'config/keys/.env')
})
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const whiteList = [process.env.CORS_APPROVED_ADDRESS,`http://localhost:${process.env.PORT}`];
const corsOptionsDelegate = {
    origin:(origin,cb)=>{
        ( whiteList.indexOf(origin) !== -1 || !origin)?
            cb(null,true)
           :cb(new Error('Not allowed by CORS'));
    }
}
app.use(cors(corsOptionsDelegate))

/////////////////END APP MIDDLEWARE///////////////////////////
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: ['asfdsfdsvCSDfczxsad']
    })
  );
app.use(passport.initialize())
app.use(passport.session())
////////////////START GRAPHQL CONFIG///////////////////////////
app.use('/graphql',expressGraphql({
    schema,
    graphiql:true
}))
////////////////START ROUTER CONFIG///////////////////////////
app.use('/',userRouter)
app.use('/',rootRouter)
/////////////////END ROUTER CONFIG///////////////////////////

export default app;