const onlineSys = require('./online');

const onlineVisitors = (httpsServer) => {
    const io = require('socket.io')(httpsServer)
    io.on('connection', async client => {
        onlineSys.online_Visitors_Count()
        onlineSys.VisitorInter()

        client.on('disconnect', () => {
            onlineSys.VisitorExit()
        });

    });
}

module.exports = onlineVisitors;