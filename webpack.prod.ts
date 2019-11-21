import path = require('path');
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import base from './webpack.prodBase';

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // tslint:disable-line: no-var-requires , tskubt:disable-line: no-implicit-dependencies

const config: webpack.Configuration = merge(base, {
    output: {
        path: path.resolve(__dirname, './build/dist-prod')
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /(.*)appconfig.ENV(\.*)/,
            resource => resource.request = resource.request.replace(/ENV/, 'prod')
        )
    ]
});

export default config;
