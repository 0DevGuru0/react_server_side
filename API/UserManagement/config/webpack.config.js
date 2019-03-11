const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports= {
    mode:"development",
    entry:"./index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'../build')
    },
    target:"node",
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
    }
}