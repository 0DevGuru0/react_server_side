const path             = require('path'),
    // BrotliPlugin       = require('brotli-webpack-plugin'),
    // CompressionPlugin  = require('compression-webpack-plugin'),
    UglifyJsPlugin     = require('uglifyjs-webpack-plugin'),
    nodeExternals      = require('webpack-node-externals');

module.exports= {
    mode:"development",
    entry:"./index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'../build')
    },
    target:"node",
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
                cache: true,
                uglifyOptions: {output: {comments: false}}
            })
        ],
    },
    devtool:"cheap-module-source-map",
    externals:[nodeExternals()],
    module:{
        rules:[
            {
                test:/.js?$/,
                exclude:/node_modules/,
                use:[
                    {loader:require.resolve('babel-loader')}
                ]
            }
        ]
    },
    // plugins:[
    //     new CompressionPlugin({algorithm:"gzip"}),
    //     new BrotliPlugin({
    //         asset:'[path].br[query]',
    //         test:/\.(js|css|html|svg)$/,
    //         threshold:10240,
    //         minRatio:0.8,
    //         deleteOriginalAssets:true
    //     })
    // ]
}