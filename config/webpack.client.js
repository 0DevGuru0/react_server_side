const path = require('path'),
    webpack = require('webpack'),
    BrotliPlugin = require('brotli-webpack-plugin'),
    CompressionPlugin = require('compression-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    name: "client",
    mode: "development",
    entry: [
        "@babel/runtime/regenerator",
        // "react-hot-loader/patch",
        "webpack-hot-middleware/client?reload=true&noInfo=false",
        "./client/index.js"
    ],
    output: {
        filename: "public-bundle.js",
        chunkFilename: 'public-bundle.chunk.js',
        path: path.resolve(__dirname, "../public"),
        publicPath: '/'
    },
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        hot: true,
        compress: true,
        overlay: {
            errors: true
        }
    },
    stats: {
        warnings: false
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
                cache: true,
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ],
    },
    module: {
        rules: [{
                test: /.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: require.resolve("babel-loader")
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }]
                })

            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new CompressionPlugin({
            algorithm: "gzip"
        }),
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new ExtractTextPlugin('stylesheets/[name].css')
    ]
}
