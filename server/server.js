import express from "express";
import bodyParser from "body-parser";
import proxy from "express-http-proxy";
import cookieParser from "cookie-parser";
// import helmet from "helmet";
import webpack from "webpack";
import expressStaticGzip from "express-static-gzip";

import webpackClientConfig from "../config/webpack.client";
import webpackServerConfig from "../config/webpack.prod.server";

const app = express();
// app.use(helmet())

app.use(cookieParser());

app.use(
	"/api",
	proxy(process.env.userManagementHost, {
		proxyReqOptDecorator(opts) {
			opts.headers["x-forwarded-host"] = process.env.hostAddress;
			return opts;
		},
		proxyErrorHandler: (err, res, next) => {
			console.log(err);
			next(err);
		}
	})
);
app.enable("trust proxy");

// const session = require('express-session')

// let sessionMiddleware = session({
//     secret: '930611040afsan_nightmare',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// });

// app.use(sessionMiddleware)

app.use(function(req, res, next) {
	if (req.secure) {
		next();
	} else {
		res.redirect(`https://${req.headers.host}${req.url}`);
	}
});

const compiler = webpack([webpackClientConfig, webpackServerConfig]);
const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, {
	serverSideRender: true,
	logLevel: "silent",
	logTime: false
});
const webpackHotServerMiddleware = require("webpack-hot-server-middleware");
// const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)

app.use(webpackDevMiddleware);

// app.use(webpackHotMiddleware)

app.use(webpackHotServerMiddleware(compiler));

const render = require("../build/server-bundle.js").default;

app.use(
	"/",
	expressStaticGzip("./public", {
		enableBrotli: true,
		orderPreference: ["br"]
	})
);

app.use(render());

require("dotenv").config();

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());
export default app;
