const onlineSys = require('./online');
const chalk = require('chalk');

const onlineVisitors = (httpsServer) => {
    const io = require('socket.io')(httpsServer)
    io.on('connection', async client => {
        let IP = await onlineSys.fetchIP()
        if(IP.ip){
            const System =  new onlineSys(IP.ip)
            // System.online_Visitors_Count()
            System.VisitorInter()
            client.on('disconnect', () => { System.VisitorExit() });
        }else{ console.log( ErrorModel( JSON.parse(IP) ) ) }
    });
}


function ErrorModel({ message, sourceCode, errorDetail }) {
    return chalk.white.bgRed.bold('\nERROR||') + `${message}\n` +
        `sourceCode:` + chalk.redBright.bold(`[ipInfoSystem_${sourceCode})]\n`) +
        `[detail]:` + chalk.redBright.bold(`${JSON.stringify(errorDetail)}`) + '\n'
}


module.exports = onlineVisitors;