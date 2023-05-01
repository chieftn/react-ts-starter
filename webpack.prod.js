const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /(.*)appconfig.dev(\.*)/,
            resource => resource.request = resource.request.replace(/dev/, 'prod')
        ),
        new webpack.NormalModuleReplacementPlugin(
            /(.*)edge(\.*)/,
            resource => resource.request = resource.request.replace(/cloud/, 'prod')
        )
    ]
});