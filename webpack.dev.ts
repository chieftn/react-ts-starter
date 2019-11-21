import path = require('path');
import * as merge from 'webpack-merge';
import base from './webpack.testBase';
import webpack = require('webpack');

module.exports = merge(base, {
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /(.*)appconfig.ENV(\.*)/,
            resource => resource.request = resource.request.replace(/ENV/, 'dev')
        )
    ]
});
