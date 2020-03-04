/* eslint-disable import/order */
require("@babel/register");
require("dotenv").config();

const https = require("https");
const fs = require("fs");
const Redis = require("redis");
const server = require("./server/server").default;

const privateKey = fs.readFileSync("server.key");
const certificate = fs.readFileSync("server.cert");
const socket_userManagement = require("./service/socket");

const httpsServer = https.createServer(
	{ key: privateKey, cert: certificate },
	server
);

const redis = Redis.createClient();

socket_userManagement(httpsServer);

httpsServer.listen(process.env.PORT, () => {
	console.log(`server is running on port ${process.env.PORT}`);
	redis.del(
		"online:count",
		"online:Visitors",
		"online:Users",
		"online:users:count",
		() => console.log("redis memory pruned successfully...")
	);
});
