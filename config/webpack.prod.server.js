const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    postcssPresetEnv = require('postcss-preset-env'),
    nodeExternals = require('webpack-node-externals');

module.exports = {
    name:"server",
    target: "node",
    mode: "production",
    entry: ["./server/routes/root.js"],
    externals: [nodeExternals('node_modules')],
    stats:{warnings: false},
    devtool: "cheap-module-source-map",
    output: {
        filename: "server-bundle.js",
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
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
            {
                test: /\.(sc|sa)ss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            importLoaders:2
                        },
                    },
                    {
                        loader:require.resolve('postcss-loader'),
                        options:{
                            ident:"postcss",
                        }
                    },
                    { loader: require.resolve("sass-loader") }
                ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('stylesheets/[name].css'),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    ]
};