const path = require('path'),
    webpack = require('webpack'),
    BrotliPlugin = require('brotli-webpack-plugin'),
    CompressionPlugin = require('compression-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    nodeExternals = require('webpack-node-externals');
module.exports = {
    name: "client",
    mode: "production",
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
                test: /\.(png|svg|jpg|gif)$/,
                loader: require.resolve('file-loader'),
                options: {
                    name: 'images/[name].[hash:8].[ext]',
                },
            },
            {
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
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                importLoaders: 1
                            }
                        },
                        {
                            loader: require.resolve('postcss-loader'),
                        }
                    ]
                })
            },
            {
                test: /\.(sc|sa)ss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: require.resolve('css-loader'),
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                importLoaders: 2
                            }
                        },
                        {
                            loader: require.resolve('postcss-loader'),
                            options: {
                                ident: 'postcss',
                                sourceMap: true
                            }
                        },
                        {
                            loader: require.resolve("sass-loader")
                        }
                    ]
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
        new MiniCssExtractPlugin({
            filename: '[name]_sass.css',
            chunkFilename: '[id]_sass.css',
        }),
        new ExtractTextPlugin('stylesheets/[name].css')
    ]
}
