const path = require("path");
const webpack = require("webpack");
const WebpackMessages = require("webpack-messages");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const postcssPresetEnv = require("postcss-preset-env");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	name: "server",
	target: "node",
	mode: "production",
	entry: ["./server/routes/root.js"],
	externals: [nodeExternals("node_modules")],
	stats: { warnings: false, children: false },
	devtool: "cheap-module-source-map",
	output: {
		filename: "server-bundle.js",
		path: path.resolve(__dirname, "../build"),
		libraryTarget: "commonjs2"
	},
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
		new MiniCssExtractPlugin({
			filename: "[name]_sass.css",
			chunkFilename: "[id]_sass.css"
		}),
		new WebpackMessages({
			name: "server",
			logger: str => console.log(`>> ${str}`)
		}),
		new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
	]
};
