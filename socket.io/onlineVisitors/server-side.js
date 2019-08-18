const onlineSys = require('./online');
// const chalk = require('chalk');
const Redis = require('redis');
const session = require('express-session')
let sessionMiddleware = session({
    secret: '930611040afsan_nightmare',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
});

const redis = Redis.createClient();

const onlineVisitors = (httpsServer) => {

    const io = require('socket.io')(httpsServer)
    io.use((socket, next) => { sessionMiddleware(socket.request, {}, next) });

    io.on('connection', client => {

        client.on('InterUser', reply => {
            if (client.request.session.user && client.request.session.user === reply.id) {
                redis.hget('online:Users', reply.id,(err,result)=>{
                    if(!result){ redis.incrby('online:users:count',1) }
                })
                redis.hincrby('online:Users', reply.id, 1)
                
            } else if (!client.request.session.user) {
                client.request.session.user = reply.id;
            }
        });

        client.on('userEntered',reply=>{
            if(reply === false){
                client.request.session.destroy()
            }else{
                client.request.session.user = reply;
                client.request.session.save();
                console.log(client.request.session.user)
            }
        })

        client.on('disconnect', () => {
            if ( client.request.session.user ) {
                redis.hget('online:Users', client.request.session.user , (err, reply) => {
                    if (reply > 0) {
                        redis.hincrby('online:Users', client.request.session.user, -1, (err, reply) => {
                            if (reply < 0 || +reply === 0) {
                                redis.hdel('online:Users', client.request.session.user ,(err,reply)=>{
                                    if(reply===1){ redis.incrby('online:users:count',-1) }
                                })
                            }
                        })
                    }
                })
            }
        })


        client.on('clientType', async reply => {
            let IP = await onlineSys.fetchIP()
            const System = new onlineSys(IP.ip)
            if (reply === 'visitor') {
                if (IP.ip) {
                    System.VisitorInter()
                    client.on('disconnect', () => {
                        System.VisitorExit()
                    });
                } else {
                    // console.log(ErrorModel(JSON.parse(IP)))
                }
            } else if (reply === 'user') {
                if (IP.ip) {
                    System.VisitorExit()
                } else {
                    // console.log(ErrorModel(JSON.parse(IP)))
                }
            }
        })
    
    });
}


// function ErrorModel({
//     message,
//     sourceCode,
//     errorDetail
// }) {
//     return chalk.white.bgRed.bold('\nERROR||') + `${message}\n` +
//         `sourceCode:` + chalk.redBright.bold(`[ipInfoSystem_${sourceCode})]\n`) +
//         `[detail]:` + chalk.redBright.bold(`${JSON.stringify(errorDetail)}`) + '\n'
// }


module.exports = onlineVisitors;