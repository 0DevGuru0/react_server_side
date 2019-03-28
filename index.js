require('@babel/register')

require('dotenv').config()
const server = require('./server/server').default

server.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});