const axios = require("axios");
const chalk = require("chalk");
const moment = require("moment");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

/* redis Buckets:
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

module.exports = class OnlineVisitors {
	constructor(ip, redis) {
		// get VisitorIP
		this.IP = ip;
		// this.visitorsSocket = visitorsSocket;
		// config redis for key space notification
		this.redis = redis;
		this.Day = moment().format("YYYY/MM/D");
	}

	static async fetchIP() {
		// return new Promise(async (resolve, reject) => {
		return axios
			.get("https://api.ipgeolocation.io/getip")
			.then(res => res.data)
			.catch(error => {
				if (error.response)
					return JSON.stringify({
						message: "The request was made and the server responded with error",
						sourceCode: "getIPRequest",
						errorDetail: error.response.data
					});

				if (error.request)
					return {
						message: "The request was made but no response was received",
						sourceCode: "getIPRequest",
						errorDetail: error.request
					};

				return {
					message:
						"Something happened in setting up the request that triggered an Error",
					sourceCode: "getIPRequest",
					errorDetail: error.message
				};
			});
	}

	async fetchVisitorInfo() {
		// await axios.post(`${process.env.hostAddress}/api/userinfo`, { ip: this.IP });
		await axios.post(`https://localhost:3000/api/userinfo`, { ip: this.IP });
	}

	VisitorInter() {
		this.redis.hget("online:visitors:TList", this.Day, (err, reply) => {
			if (!reply) reply = {};
			if (typeof reply === "string") reply = JSON.parse(reply);
			reply[this.IP] = reply[this.IP] ? reply[this.IP] + 1 : 1;
			reply = JSON.stringify(reply);
			this.redis.hset("online:visitors:TList", this.Day, reply);
		});
		// check IP HEXISTS(key:online:Visitors,filed:IP)
		this.redis.hexists("online:Visitors", this.IP, async (err, reply) => {
			// [checkIP] reply = true
			if (reply) {
				// INCR visitor connection HINCRBY(key:online:Visitors,filed:IP,connection++)
				this.redis.hincrby("online:Visitors", this.IP, 1);
			} else {
				await this.fetchVisitorInfo();
				// [checkIP] reply = false
				// SET visitor Bucket HSET(key:online:Visitors,filed:IP,connection:0)
				this.redis.hset("online:Visitors", this.IP, 0);
				this.redis.incr("online:count");
			}
		});
	}

	ErrorModel({ message, sourceCode, errorDetail }) {
		return (
			`${chalk.white.bgRed.bold("\nERROR||")}${message}\n` +
			`sourceCode:${chalk.redBright.bold(
				`[ipInfoSystem_${sourceCode})]\n`
			)}[detail]:${chalk.redBright.bold(`${JSON.stringify(errorDetail)}`)}\n`
		);
	}

	VisitorExit() {
		// GET visitor Bucket HGET(key:online:Visitors,filed:IP)
		this.redis.hget("online:Visitors", this.IP, (err, reply) => {
			// [HGET reply] > 0
			if (reply > 0) {
				// DECR visitor connection HINCRBY(key:online:Visitors,filed:IP,connection:-1)
				this.redis.hincrby("online:Visitors", this.IP, -1, (error, innerReply) => {
					if (innerReply < 0) {
						// [DECR reply] < 0
						// DELETE visitor HDEL(key:online:Visitors,filed:IP)
						this.redis.hdel("online:Visitors", this.IP);
						this.redis.decr("online:count");
					}
					// [DECR reply] > 0 || [DECR reply] = 0
					// " another connection of IP exist. "
				});
			}
			if (+reply === 0) {
				if (reply) {
					// DELETE visitor HDEL(key:online:Visitors,filed:IP)
					this.redis.hdel("online:Visitors", this.IP, (error, innerReply) => {
						// visitorsCount decr(key:online:count)
						this.redis.decr("online:count");
					});
				}
			}
		});
	}

	get(key) {
		return this.redis.get(key);
	}
};
