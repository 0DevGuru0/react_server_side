const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    name:"server",
    mode: "development",
    entry: ["./index.js"],
    externals: [nodeExternals()],
    stats:{warnings: false},
    devtool: "cheap-module-source-map",
    output: {
        filename: "server-bundle.js",
		path: path.resolve(__dirname, '../Pserver'),
		libraryTarget: 'commonjs2'
    },
    target: "node",
    module: {
        rules: [{
                test: /js?$/,
                exclude: /node_modules/,
                use: [{
                    loader: require.resolve("babel-loader")
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }]
                })
            },
            {
				test: /\.(png|svg|gif|jpe?g)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/images/[name].[hash:8].[ext]',
							emitFile: false
						}
					}
				]
			},
        ]
    },
    plugins:[
        new ExtractTextPlugin('stylesheets/[name].css'),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),

    ]
};