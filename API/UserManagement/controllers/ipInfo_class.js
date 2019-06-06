export default new class IpInfoSystem{
    //    constructor(){
    //       this.now = new Date();
    //       this.Day = moment().format("YYYY/M/D")
    //       this.ipgeolocationApi  = new IPGeolocationAPI(process.env.GEOLOCATION_IP_ADDRESS);
    //       this.geolocationParams = new GeolocationParams();
    //       this.targetData = [ "continent_name", "country_name", "state_prov", "district", "latitude", "longitude", "calling_code", "languages", "organization", "currency" ];
    //       this.fetchIP().then(ip => this.ip = ip)
    //       this.redisClient = redis.createClient({ retry_strategy: () => 1000 })
    //       this.geolocationParams.setFields(this.targetData.join(','));
    //    }
    //    async fetchIP(){
    //       // try{
    //          let {data} = await axios.get('https://api.ipgeolocation.io/getip');
    //          return data.ip;
    //       // }catch(error){
    //       //    if (error.response) {
    //       //       return this.ErrorModel({ message:'The request was made and the server responded with error', sourceCode:'getIPRequest', errorDetail:error.response.data })
    //       //     } else if (error.request) {
    //       //       return this.ErrorModel({ message:'The request was made but no response was received', sourceCode:'getIPRequest', errorDetail:error.request })
    //       //     } else {
    //       //       return this.ErrorModel({ message:'Something happened in setting up the request that triggered an Error', sourceCode:'getIPRequest', errorDetail:error.message })
    //       //    }
    //       // }
    //    }
    //    storeInfo_redis(cb){
    //       this.redisClient.hget(this.Day,this.ip, async (error, result) => {
    //          if(error){ return cb(this.ErrorModel({ message:'Something went wrong on redis', sourceCode:'FetchVisitorDataFromRedis', errorDetail:error })) }
    //          if(result !== null){ return cb(null) }
    //          const ipData = await this.fetchInformation(cb)
    //          console.log(ipData)
    //          this.redisClient.hset(this.Day,this.ip, ipData)
    //       })
    //    }
    //    async fetchInformation(cb){
    //       await this.ipgeolocationApi.getGeolocation((ipData) => {
    //          if(ipData.message){ return cb(this.ErrorModel({ message:'something went wrong on fetching IP information from protocol', sourceCode:'fetchInfoFromProtocol', errorDetail:ipData.message })) }
    //          delete ipData.ip;
    //          ipData={ ...ipData, currency:ipData.currency['code'] }
    //          ipData = JSON.stringify(ipData)
    //          return ipData;
    //       }, this.geolocationParams);
    //    }
    
    //    ErrorModel({message,sourceCode,errorDetail}){
    //       return chalk.white.bgRed.bold('\nERROR||') +`${message}\n` +
    //       `sourceCode:`  + chalk.redBright.bold(`[ipInfoSystem_${sourceCode})]\n`) + 
    //       `[detail]:`    + chalk.redBright.bold(`${JSON.stringify(errorDetail)}`)  + '\n'
      
    //    }
    //    transferInfo_Mongo(cb){
    //       let lastDay = moment().subtract(1, 'day').format('YYYY/M/D')
    //       this.redisClient.hgetall(lastDay, (error, result) => {
    //          if(error){ return cb(this.ErrorModel({ message:'Something went wrong on redis', sourceCode:'FetchVisitorDataFromRedis', errorDetail:error })) }
    //          if(result == null){ return cb(this.ErrorModel({ message:'receiving null as result for redis query ', sourceCode:'FetchVisitorDataFromRedis', errorDetail:'{queryResult:null}' })) }
    //          let errors = []
    //          for (let key in result) {
    //             let visitorIP_info = new IPINFO_DB(JSON.parse(result[key]))
    //             let visitorIP = new IP_DB({ IP: key, visitedDay: lastDay });
    //             visitorIP.IPsInfo = visitorIP_info;
    //             Promise.all([
    //                visitorIP.save(),
    //                visitorIP_info.save()
    //             ]).catch(err => { if (err) { errors.push(err)} })
    //          }
    //          if(errors.length == 0){
    //             this.redisClient.del(lastDay)
    //          } else {
    //             return cb(this.ErrorModel({ message:'something went wrong on storing fetched data from redis on mongoDB', sourceCode:'StoreFetchedDataOnDB', errorDetail:errors })) 
    //          }
    //       })
    //    }
    //    checkForTransfer(cb){
    //       var storeTime = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), 24, 0, 0, 0) - this.now;
    //       if (storeTime < 0) { storeTime += 86400000; }
    //       setInterval(() => { 
    //          this.transferInfo_Mongo(cb)
    //       }, storeTime + 20000);
    //    }
    //    startSystem(cb){
    //       this.storeInfo_redis((err)=>{ cb(err) })
    //       this.checkForTransfer((err)=>{ cb(err) })
    //    }
    // }();