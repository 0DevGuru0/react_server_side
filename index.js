require('dotenv').config()
import server from'./server/server'

server.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});