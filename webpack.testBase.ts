import path = require('path');
import * as merge from 'webpack-merge';
import common from './webpack.common';
import webpack = require('webpack');

const config = merge(common, {
    // devServer: {
    //     contentBase: __dirname,
    //     open: true,
    //     publicPath: '/build/dist/'
    // },

    // Enable sourcemaps for debugging webpack's output
    devtool: 'eval-source-map',

    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'build', 'ServiceGroupRoot', 'dist'),
        historyApiFallback: {
            disableDotRule: true
        },
        port: 5000,
    },

    mode: 'development',

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.dev.json',
                    logInfoToStdOut: true,
                    logLevel: 'info'
                },
                test: /\.tsx?$/,
            },

            // All output '.js' files will have any sourcemaps re-preprocessed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},

            // Styles
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader', options: { sourceMap: true}},
                    { loader: 'sass-loader', options: {sourceMap: true}}]
            }
        ]
    }
});

export default config;