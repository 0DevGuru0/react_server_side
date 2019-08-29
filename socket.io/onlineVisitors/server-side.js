const onlineSys = require('./online');
// const chalk = require('chalk');
const Redis = require('redis');
const redis = Redis.createClient();
const  parser = require('ua-parser-js');
const session = require('express-session')

let sessionMiddleware = session({
    secret: '930611040afsan_nightmare',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
});
const onlineVisitors = (httpsServer) => {
    const io = require('socket.io')(httpsServer)
    io.use((socket, next) => { sessionMiddleware(socket.request, {}, next) });
    
    io.on('connection', client => {
        let {browser,os}     = parser(client.handshake.headers['user-agent']);
        let browserContainer = browser.name+browser.major+":"+os.name+os.version

        client.on('InterUser', reply => {            
            /*
                - check reply.sign
                    - true|     store reply.sign in session
                    - false|    get user information from redis by reply.id
                        -!result| set current browser count to one & increment user online count
                        -result.length > 0 | find & increment current browser count in result object & increment user:online:count
                    -resave the altered value of reply
            */
            if(reply.sign){
                client.request.session.sign = reply.sign
                client.request.session.user = reply.id
                
            }else{
                client.request.session.user = reply.id
                redis.hget('online:Users',reply.id,(err,result)=>{
                    result = JSON.parse(result)
                    if(!result){
                        result = {};
                        result[browserContainer] = 1
                        redis.incr('online:users:count')
                    }else{ result[browserContainer] = ++ result[browserContainer] }
                    redis.hset( 'online:Users' , reply.id , JSON.stringify(result))
                })
            }
        });

        client.on('disconnect', () => {
            /*
                - check to see if there is user 
                -YES|get the reply from online Users of userID
                    -reply.length > 1| check count of current Browser
                        -Browser count > 1| Decrement user current Browser count  
                        -Browser count = 1| delete current browser
                    -reply.length = 1| check count of current Browser
                        -Browser count > 1| Decrement user current Browser count  
                        -Browser count = 1| delete  user from online:Users && decrement user online count
                -resave the altered value of reply
            */
           if(client.request.session.user ){
               let userID = client.request.session.user
               redis.hget('online:Users',userID,(err,reply)=>{
                   if(reply){ 
                       reply = JSON.parse(reply);
                       let replyLength = Object.keys(reply).length
                       let browserCount = reply[browserContainer]
                       let resave = true
                       if( replyLength > 1 ){
                            if( browserCount > 1 ){ reply[browserContainer] = --reply[browserContainer]; }
                            if( browserCount === 1 ){ delete reply[browserContainer]; }
                        }
                       if( replyLength === 1 ){
                            if( browserCount > 1 ){ reply[browserContainer] = --reply[browserContainer]; }
                            if( browserCount === 1 ){
                                redis.hdel('online:Users',userID)
                                redis.decr('online:users:count')
                                resave = false
                            }
                        }
                        if(resave){ redis.hset('online:Users',userID,JSON.stringify(reply)) }
                   
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