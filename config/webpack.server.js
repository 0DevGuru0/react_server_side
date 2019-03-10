const path = require('path');
const base =  require('./webpack.base.js');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const config = {
    mode:"development",
    entry:"./index.js",
    externals:[
        nodeExternals()
    ],
    target:"node",
    devtool:"cheap-module-source-map",
    output:{
        filename:"server-bundle.js",
        path:path.resolve(__dirname,"../build")
    },
};

module.exports = merge(base,config);