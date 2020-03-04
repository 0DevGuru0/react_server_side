const path = require("path");
const webpack = require("webpack");
const WebpackMessages = require("webpack-messages");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	name: "server",
	mode: "development",
	entry: ["./index.js"],
	externals: [nodeExternals()],
	stats: {
		children: false
	},
	devtool: "cheap-module-source-map",
	output: {
		filename: "server-bundle.js",
		path: path.resolve(__dirname, "../Pserver"),
		libraryTarget: "commonjs2"
	},
	target: "node",
	module: {
		rules: [
			{
				test: /js?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve("babel-loader")
					}
				]
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
				test: /\.(png|svg|gif|jpe?g)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "/images/[name].[hash:8].[ext]",
							emitFile: false
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		// new ExtractTextPlugin("stylesheets/[name].css"),
		new WebpackMessages({
			name: "client",
			logger: str => console.log(`>> ${str}`)
		}),
		new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
	]
};
