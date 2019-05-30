import axios from 'axios';
import redis from 'redis';
import moment from 'moment';
import chalk from 'chalk';
import IP_DB from '../models/visitors/ips';
import IPINFO_DB from '../models/visitors/ipInfo';



const redisClient = redis.createClient({retry_strategy: () => 1000})

const GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');
const IPGeolocationAPI  = require('ip-geolocation-api-javascript-sdk/IPGeolocationAPI');
const ipgeolocationApi  = new IPGeolocationAPI(process.env.GEOLOCATION_IP_ADDRESS);

const ipInfo = {}

let Day = moment().format("YYYY/M/D")

ipInfo.storeSystem = async (cb) => {
   const successMsg = [];
   let IPContainer ;

   //1| get visitor IP via axios
   try{
      let {data} = await axios.get('https://api.ipgeolocation.io/getip');
      IPContainer = data.ip;
   }catch(error){
      if (error.response) {
        return cb( chalk.white.bgRed.bold('\nERROR||')+ `The request was made and the server responded with error \n`+ `sourceCode:`+chalk.redBright.bold(`[ipInfoSystem_getIPRequest(line:24)]\n`)+ `[detail]:`+chalk.redBright.bold(`${JSON.stringify(error.response.data)}`)+'\n' ,null);
       } else if (error.request) {
         return cb( chalk.white.bgRed.bold('\nERROR||')+ `The request was made but no response was received \n`+ `sourceCode:`+chalk.redBright.bold(`[ipInfoSystem_getIPRequest(line:24)]\n`)+ `[detail]:`+chalk.redBright.bold(`${JSON.stringify(error.request)}`)+'\n' ,null);
       } else {
         return cb( chalk.white.bgRed.bold('\nERROR||')+ `Something happened in setting up the request that triggered an Error\n`+ `sourceCode:`+chalk.redBright.bold(`[ipInfoSystem_getIPRequest(line:24)]\n`)+ `[detail]:`+chalk.redBright.bold(`${JSON.stringify(error.message)}`)+'\n' ,null);
      }
   }

   //2| calculate remaining time to store IPs from redis memory to mongodb
   var now = new Date();
   var storeTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0, 0) - now;
   if (storeTime < 0) { storeTime += 86400000; }
   setInterval(() => {
      let lastDay = moment().subtract(1, 'day').format('YYYY/M/D')
      redisClient.hgetall(lastDay, (error, result) => {
         if(error){
            return cb( chalk.white.bgRed.bold('\nERROR||') + `Something went wrong on redis \n` + `sourceCode:` + chalk.redBright.bold(`[ipInfoSystem_FetchVisitorDataFromRedis(line:41)]\n`) + `[detail]:` + chalk.redBright.bold(`${JSON.stringify(error)}`) + '\n', null);
         }
         if(result == null){
            return cb( chalk.white.bgRed.bold('\nERROR||') + `receiving null as result for redis query  \n` + `sourceCode:` + chalk.redBright.bold(`[ipInfoSystem_FetchVisitorDataFromRedis(line:41)]\n`) + `[detail]:` + chalk.redBright.bold(`${JSON.stringify({queryResult:null})}`) + '\n', null);
         }
         //3|Store Fetched Data on Mongodb
         let errors = []
         for (let key in result) {
            let visitorIP_info = new IPINFO_DB(JSON.parse(result[key]))
            let visitorIP = new IP_DB({
               IP: key,
               visitedDay: lastDay
            });
            visitorIP.IPsInfo = visitorIP_info;
            Promise.all([
               visitorIP.save(),
               visitorIP_info.save()
            ]).catch(err => {
               if (err) { errors.push(err)}
            })
         }
         if(errors.length == 0){
            redisClient.del(lastDay)
         } else {
            return cb( chalk.white.bgRed.bold('\nERROR||') + `something went wrong on storing fetched data from redis on mongoDB \n` + `sourceCode:` + chalk.redBright.bold(`[ipInfoSystem_StoreFetchedDataOnDB(line:57)]\n`) + `[detail]:` + chalk.redBright.bold(`${JSON.stringify(errors)}`) + '\n', null);
         }
      })
   }, storeTime + 20000);

   //  4|Fetch information and store in Redis
   redisClient.hget(Day,IPContainer, (error, result) => {
      if(error){
         return cb( chalk.white.bgRed.bold('\nERROR||') + `Something went wrong on redis \n` + `sourceCode:` + chalk.redBright.bold(`[ipInfoSystem_FetchVisitorDataFromRedis(line:73)]\n`) + `[detail]:` + chalk.redBright.bold(`${JSON.stringify(error)}`) + '\n', null);
      }
      if(result !== null){
         return cb( chalk.white.bgRed.bold('\nERROR||') + `receiving unexpected Data as result for redis query  \n` + `sourceCode:` + chalk.redBright.bold(`[ipInfoSystem_FetchVisitorDataFromRedis(line:73)]\n`) + `[detail]:` + chalk.redBright.bold(`${JSON.stringify({queryResult:result})}`) + '\n', null); 
      }
      let geolocationParams = new GeolocationParams();
      let targetData = [ "continent_name", "country_name", "state_prov", "district", "latitude", "longitude", "calling_code", "languages", "organization", "currency" ];
      geolocationParams.setFields(targetData.join(','));
      ipgeolocationApi.getGeolocation((ipData) => {
         if(ipData.message){
            return cb( chalk.white.bgRed.bold('\nERROR||') + `something went wrong on fetching IP information from protocol \n` + `sourceCode:` + chalk.redBright.bold(`[ipInfoSystem_fetchInfoFromProtocol(line:86)]\n`) + `[detail]:` + chalk.redBright.bold(`${JSON.stringify(ipData.message)}`) + '\n', null);
         }
         delete ipData.ip;
         ipData={
            ...ipData,
            currency:ipData.currency['code']
         }
         ipData = JSON.stringify(ipData)
         redisClient.hset(Day, IPContainer, ipData)
      }, geolocationParams);
   })
}
export default ipInfo;