const onlineSys = require('./online');
const chalk = require('chalk');
const Redis = require('redis');

const redis = Redis.createClient();

const onlineVisitors = (httpsServer) => {

    const io = require('socket.io')(httpsServer)

    io.on('connection', client => {
        client.on('exitUser', reply => { 
            console.log(reply) 
            redis.sadd('ExitList:users',reply.id,(err,reply)=>{
                redis.decr('online:users:count')
            })

        });
        client.on('InterUser', reply => { 
            console.log(reply) 
            redis.sismember('ExitList:users',reply.id,(err,reply)=>{
                if(reply === 1){
                    redis.incr('online:users:count',(err,result)=>{
                        redis.srem('ExitList:users',reply.id)
                    })
                }
            })
        });

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
                    console.log(ErrorModel(JSON.parse(IP)))
                }
            } else if (reply === 'user') {
                if (IP.ip) {
                    System.VisitorExit()
                } else {
                    console.log(ErrorModel(JSON.parse(IP)))
                }
            }
        })
    });
}


function ErrorModel({
    message,
    sourceCode,
    errorDetail
}) {
    return chalk.white.bgRed.bold('\nERROR||') + `${message}\n` +
        `sourceCode:` + chalk.redBright.bold(`[ipInfoSystem_${sourceCode})]\n`) +
        `[detail]:` + chalk.redBright.bold(`${JSON.stringify(errorDetail)}`) + '\n'
}


module.exports = onlineVisitors;