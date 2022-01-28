import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import path = require('path');

const config: webpack.Configuration = {

    entry: {
        main: ['whatwg-fetch', './src/index.tsx']
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './build/dist'),
        publicPath: '',
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
        plugins: [
            new TsconfigPathsPlugin(/* { tsconfig, compiler } */)
        ]
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'tslint-loader',
                options: {
                    emitErrors: true,
                    failOnHint: true
                },
                test: /\.tsx?$/

            },

            // Images
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                      name: 'images/[hash]-[name].[ext]'
                    }
                  }
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name(module: any) { // tslint:disable-line: no-any
                  const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                  // npm package names are URL-safe, but some servers don't like @ symbols
                  return `npm.${packageName.replace('@', '')}`;
                },
              },
            },
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 100000,
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ]
};

export default config;
