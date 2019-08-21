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
            if (client.request.session.user 
                && client.request.session.user === reply.id) {

                redis.hget('online:Users', reply.id,(err,result)=>{
                    if(!result ){ 
                        redis.incrby('online:users:count',1) }
                })
                if(!client.request.session.sign){
                    redis.hincrby('online:Users', reply.id, 1)
                    client.request.session.sign = false;
                }
                
            } else if (!client.request.session.user) {
                client.request.session.user = reply.id;
                client.request.session.sign = reply.sign;
            }

        });
        client.on('disconnect', () => {

            /*
                - check to see the client close the browser is visitor or user
                    - Visitor|  pass it with out any action
                    - User|     get mount of the user in online:Users bucket
                        -mount < 0 --> it's not possible
                        -mount = 0 --> pass it with out any action
                        -mount > 0 --> decrease usersID mount by one then check to see the result
                            -result > 0 --> pass it with out any action
                            -result = 0 ,result < 0 --> 
                                user signed out permanently and delete userID from online:Users 
                                + decrement online:users:count by one
            */

            if (client.request.session.user) {
                let userID = client.request.session.user
                redis.hget('online:Users', userID, (err, reply) => {
                    if (+reply > 0) {

                        redis.hincrby('online:Users', userID, -1, (err, reply) => {
                            if (+reply < 0 || +reply === 0) {

                                redis.hdel('online:Users', userID, (err, reply) => {
                                    if (+reply === 1) { redis.incrby('online:users:count', -1) }
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