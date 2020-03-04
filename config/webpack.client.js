const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMessages = require("webpack-messages");
const TerserPlugin = require("terser-webpack-plugin");
require("dotenv").config();

const isEnvProduction = process.env.NODE_ENV === "production" ? true : false;
// const isEnvDevelopment = process.env.NODE_ENV === "development" ? true : false;
module.exports = {
	name: "client",
	mode: "development",
	entry: [
		"@babel/runtime/regenerator",
		// "react-hot-loader/patch",
		// "webpack-hot-middleware/client?reload=true&noInfo=false",
		"./client/index.js"
	],
	output: {
		filename: "public-bundle.js",
		chunkFilename: "public-bundle.chunk.js",
		path: path.resolve(__dirname, "../public"),
		publicPath: "/"
	},
	devtool: "cheap-module-source-map",
	devServer: {
		contentBase: path.join(__dirname, "../public"),
		// hot: true,
		compress: true,
		overlay: {
			errors: true
		}
	},
	stats: "none",
	optimization: {
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendor: {
					name: "vendor",
					chunks: "initial",
					minChunks: 2
				}
			}
		},
		minimize: isEnvProduction,
		minimizer: [new TerserPlugin()]
	},
	module: {
		rules: [
			{
				parser: {
					requireEnsure: false
				}
			},
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				enforce: "pre",
				use: [
					{
						loader: require.resolve("eslint-loader"),
						options: {
							formatter: require.resolve("react-dev-utils/eslintFormatter"),
							eslintPath: require.resolve("eslint")
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: require.resolve("file-loader"),
				options: {
					name: "images/[name].[hash:8].[ext]"
				}
			},
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve("babel-loader"),
						options: {
							cacheDirectory: true,
							cacheCompression: isEnvProduction,
							compact: isEnvProduction
						}
					}
				]
			},
			{
				test: /\.(js|mjs)$/,
				include: "/node_modules",
				loader: require.resolve("babel-loader"),
				options: {
					babelrc: false,
					configFile: false,
					compact: false,
					presets: [
						[
							require.resolve("babel-preset-react-app/dependencies"),
							{ helpers: true }
						]
					],
					cacheDirectory: true,
					cacheCompression: isEnvProduction,
					sourceMaps: false
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: "stylesheets" }
					},
					{
						loader: require.resolve("css-loader"),
						options: {
							modules: {
								localIdentName: "[name]__[local]--[hash:base64:5]"
							},
							importLoaders: 1
						}
					},
					{
						loader: require.resolve("postcss-loader")
					}
				]
			},
			{
				test: /\.(sc|sa)ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: "stylesheets" }
					},
					{
						loader: require.resolve("css-loader"),
						options: {
							modules: {
								localIdentName: "[name]__[local]--[hash:base64:5]"
							},
							importLoaders: 2
						}
					},
					{
						loader: require.resolve("postcss-loader"),
						options: {
							ident: "postcss",
							sourceMap: true
						}
					},
					{
						loader: require.resolve("sass-loader")
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // Enable HMR
		new CompressionPlugin({
			filename: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new CompressionPlugin({
			filename: "[path].br[query]",
			algorithm: "brotliCompress",
			test: /\.(js|css|html|svg)$/,
			compressionOptions: { level: 11 },
			threshold: 10240,
			minRatio: 0.8
		}),
		new WebpackMessages({
			name: "client",
			logger: str => console.log(`>> ${str}`)
		}),
		new MiniCssExtractPlugin({
			filename: "[name]_sass.css",
			chunkFilename: "[id]_sass.css"
		}),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
	],
	node: {
		module: "empty",
		dgram: "empty",
		dns: "mock",
		fs: "empty",
		http2: "empty",
		net: "empty",
		tls: "empty",
		child_process: "empty"
	}
};
