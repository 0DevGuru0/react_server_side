const Redis = require('redis');
const PubSub = require('./pubsub');
const axios = require('axios');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
/*redis Buckets:
 * 1) onlineVisitors (
        type: hash 
        key: online:Visitors 
        field: IP
        connection: number
    )
 * 2) visitorsCount (
        type: set
        key: online:count
        value: number
    )
*/

const Online_Visitors_System = class OnlineVisitors {
    constructor() {
        // get VisitorIP
        this.fetchIP().then(ip => this.IP = ip).catch(err=>{
            return err
        });
        // config redis for key space notification
        this.redis = Redis.createClient();
        this.redis.on('ready', () => {
            this.redis.config('SET', "notify-keyspace-events", 'E$')
        })
        PubSub.subscribe("__keyevent@0__:incrby")
    }
    async fetchIP() {
        return new Promise(async (resolve, reject) => {
            await axios.get('https://api.ipgeolocation.io/getip')
                .then(res => resolve(res.data.ip))
                .catch(error=>{
                    if (error.response) {
                        return reject(this.ErrorModel({
                            message:'The request was made and the server responded with error',
                            sourceCode:'getIPRequest',
                            errorDetail:error.response.data
                        }))
                        } else if (error.request) {
                        return reject(this.ErrorModel({
                            message:'The request was made but no response was received',
                            sourceCode:'getIPRequest',
                            errorDetail:error.request
                        }))
                        } else {
                        return reject(this.ErrorModel({
                            message:'Something happened in setting up the request that triggered an Error',
                            sourceCode:'getIPRequest',
                            errorDetail:error.message
                        })) 
                    }
                })
        })
    }

    async fetchVisitorInfo(){   
        await axios.post(`${process.env.hostAddress}/api/userinfo`,{
            ip:this.IP
        })
    }
    VisitorInter() {
        // check IP HEXISTS(key:online:Visitors,filed:IP)
        this.redis.hexists('online:Visitors', this.IP, async (err, reply) => {
            // [checkIP] reply = true
            if (reply) {
                // INCR visitor connection HINCRBY(key:online:Visitors,filed:IP,connection++) 
                this.redis.hincrby('online:Visitors', this.IP, 1);
            } else {
                await this.fetchVisitorInfo()
                // [checkIP] reply = false
                // SET visitor Bucket HSET(key:online:Visitors,filed:IP,connection:0)
                this.redis.hset('online:Visitors', this.IP, 0);

                // visitorsCount incr(key:online:count)
                this.redis.incr('online:count')
            }
        })

    }

    VisitorExit() {
        // GET visitor Bucket HGET(key:online:Visitors,filed:IP)
        this.redis.hget('online:Visitors', this.IP, (err, reply) => {

            // [HGET reply] > 0
            if (reply > 0) {

                // DECR visitor connection HINCRBY(key:online:Visitors,filed:IP,connection:-1)
                this.redis.hincrby('online:Visitors', this.IP, -1, (err, reply) => {
                    if (reply < 0) {
                        // [DECR reply] < 0
                        // DELETE visitor HDEL(key:online:Visitors,filed:IP)
                        this.redis.hdel('online:Visitors', this.IP)
                    }
                    // [DECR reply] > 0 || [DECR reply] = 0
                    // " another connection of IP exist. "
                })

            } else if (reply == 0) {
                // [HGET reply] = 0

                // DELETE visitor HDEL(key:online:Visitors,filed:IP)
                this.redis.hdel('online:Visitors', this.IP)
                // visitorsCount decr(key:online:count)
                this.redis.decr('online:count')

            } else {
                // [HGET reply] < 0
                // implicit event [system doesn't work properly|transmit error to admin(console)]
            }
        })
    }

    online_Visitors_Count() {
        // trigger keyspace notification for incr and decr of onlineVisitors bucket
        PubSub.on("message", async (channel, message) => {
            if(message == 'online:count'){
                this.redis.get(message,(err,reply)=>{
                    console.log('online_visitors_count::',reply)
                })
            }
        })
    }

    get(key) {
        return this.redis.get(key)
    }
};

module.exports = new Online_Visitors_System()