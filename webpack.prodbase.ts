import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import common from './webpack.common';

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // tslint:disable-line: no-var-requires , tskubt:disable-line: no-implicit-dependencies

const config: webpack.Configuration = merge(common, {
    mode: 'production',
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json'
                },
                test: /\.tsx?$/
            },

            // Styles
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader', options: { sourceMap: false}},
                    { loader: 'sass-loader', options: {sourceMap: false}}]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
});

export default config;
