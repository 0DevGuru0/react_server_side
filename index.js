require('@babel/register')
const https = require('https')
const fs = require('fs')
require('dotenv').config()
const server = require('./server/server').default

const privateKey  = fs.readFileSync('server.key');
const certificate = fs.readFileSync('server.cert');

https.createServer({
    key: privateKey,
    cert: certificate
}, server).listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
});