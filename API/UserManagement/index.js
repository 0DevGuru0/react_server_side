import server from './server';
server.listen(process.env.PORT,()=>{
    console.log(`[UserManagement]_server is running on port ${process.env.PORT}`)
})
