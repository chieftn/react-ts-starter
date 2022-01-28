
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /(.*)appconfig.ENV(\.*)/,
            resource => resource.request = resource.request.replace(/ENV/, 'dev')
        )
    ]
});