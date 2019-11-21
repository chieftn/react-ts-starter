import path = require('path');
import * as merge from 'webpack-merge';
import base from './webpack.testBase';
import webpack = require('webpack');

module.exports = merge(base, {
    output: {
        path: path.resolve(__dirname, './build/dist-test')
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /(.*)appconfig.ENV(\.*)/,
            resource => resource.request = resource.request.replace(/ENV/, 'test')
        )
    ]
});