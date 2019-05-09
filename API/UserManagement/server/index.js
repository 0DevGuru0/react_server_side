import express      from 'express';
import mongoose     from 'mongoose';
import bodyParser   from 'body-parser';
import passport     from 'passport';
import path         from 'path';
import fs           from 'fs';
import session      from 'express-session';
import cookieParser from 'cookie-parser'
import cors         from 'cors';
import csrf         from 'csurf';
import xssFilter    from 'x-xss-protection';
import hpp          from 'hpp';
import helmet       from 'helmet';
import userRouter   from '../routes/userRouter';
import rootRouter   from '../routes/rootRouter';
import http         from 'http';
import redisAdapter from 'socket.io-redis';
import morgan       from 'morgan';
import rfs          from 'rotating-file-stream';
import Redis        from 'ioredis'
import User         from '../models/user'
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
app.use(helmet())
app.use(helmet.noSniff())
app.use(helmet.ieNoOpen())
var logDirectory = path.resolve('./logs')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
let accessLogStream = rfs('access.log',{
    interval:'1d',
    path:logDirectory
})
app.use(morgan('combined', { stream: accessLogStream }))
/////////////////START APP MIDDLEWARE///////////////////////////
require('dotenv').config({
    path:path.resolve(process.cwd(),'config/keys/.env')
})
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(hpp())
app.disable('x-powered-by')

const whiteList = [process.env.CORS_APPROVED_ADDRESS,`http://localhost:${process.env.PORT}`];
const corsOptionsDelegate = {
    origin:(origin,cb)=>{
        ( whiteList.indexOf(origin) !== -1 || !origin)?
            cb(null,true)
           :cb(new Error('Not allowed by CORS'));
    }
}
app.use(cors(corsOptionsDelegate))

/////////////// CACHE IMPLEMENTING ///////////////////////////
let RedisStore = require('connect-redis')(session);
let server = http.createServer(app)
const io = require('../webSocket/socket').init(server);
const expressSession = session({
    secret:"3f9faa8bc0e722172cc0bdafede9f3f217474e47",
    resave:false,
    saveUninitialized:false,
    store:new RedisStore({
        prefix:"session:auth:"
    }),
    cookie:{
        maxAge:30 * 24 * 60 * 60 * 1000,
        httpOnly:true,
    }
})
app.use(expressSession)

app.use(xssFilter())
app.use(passport.initialize())
app.use(passport.session());
io.use((socket,next)=>{expressSession(socket.request,{},next)});
io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));
////////////////START GRAPHQL CONFIG///////////////////////////
app.use('/graphql',expressGraphql({
    schema,
    graphiql:true,
}))
////////////////START ROUTER CONFIG///////////////////////////
app.use('/',csrf(),userRouter)
app.use('/',csrf(),rootRouter)
/////////////////START ERROR HANDLING///////////////////////////
app.use((req, res, next)=>{
    res.status(404).send('404');
});

app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status||500);
    res.send(err.message);
});


export default server;