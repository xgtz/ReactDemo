var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig,{
    devServer:{
        
    }
})