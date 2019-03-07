const path = require('path');
const base =  require('./webpack.base.js')
const merge = require('webpack-merge')

const config = {
    mode:"development",
    entry:"./client/index.js",
    output:{
        filename:"public-bundle.js",
        path:path.resolve(__dirname,"../public")
    },
    devtool:"cheap-module-source-map"
}

module.exports = merge(base,config)