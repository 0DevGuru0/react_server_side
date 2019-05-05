import server from './server';
server.listen(process.env.PORT,()=>{
    console.log(`[UserManagement]_server is running on port ${process.env.PORT}`)
})
let io = require('./webSocket/socket').getIO()
io.on('connection',socket=>{
    console.log(`Client connected // id:[${JSON.stringify(socket.handshake.time)}]`)
    io.emit('client','[UserManagement]server is connected successfully')
    socket.emit('users','UsersList')
    if(socket.request.session.name !== undefined){
        socket.emit('name',socket.request.session.name);
        io.emit('event',socket.request.session.name+'has joined!')
    }
    socket.on('name',(name)=>{
        socket.request.session.name = name;
        socket.request.session.save();
        socket.broadcast.emit('event', name + 'say hello!');
    })
    socket.on('result',data=>{
        console.log(data)
    })
})

let usersSocket = require('./webSocket/socket').nameSpace('/users');
usersSocket.on('connection',socket=>{
    socket.emit('users','user is connected to list')
})
