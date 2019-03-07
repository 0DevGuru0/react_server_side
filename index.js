require('dotenv').config()
const server = require('./server/server');

server.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});