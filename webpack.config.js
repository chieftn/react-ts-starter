const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = 'target';
const TARGET_EDGE = 'edge';
const TARGET_CLOUD = 'cloud';
const MODE = 'mode';
const MODE_DEVELOPMENT = 'development';
const MODE_PRODUCTION = 'production';

module.exports = (env) => {
    const mode = env[MODE] ?? MODE_PRODUCTION;
    const target = env[TARGET] ?? TARGET_CLOUD;

    const configuration = {
        devServer: {
            historyApiFallback: true,
            compress: true,
            port: 3000,
        },
        devtool: mode === MODE_DEVELOPMENT ? 'inline-source-map' : undefined,
        entry: './src/index.tsx',
        mode,
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    enforce: 'pre',
                    use: [
                    {
                        options: {
                        eslintPath: require.resolve('eslint'),

                        },
                        loader: require.resolve('eslint-loader'),
                    },
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(scss|css)$/,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ],
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, '.', 'dist'),
            publicPath: '/'
        },


        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 1000,
            },
        },
        plugins: [
            new CleanWebpackPlugin(),
            new htmlWebpackPlugin({
                template: './src/index.html'
            }),
            ...(mode === MODE_DEVELOPMENT) ? [
                new webpack.NormalModuleReplacementPlugin(
                    /(.*)mode.prod(\.*)/,
                    resource => resource.request = resource.request.replace(/prod/, 'dev')
                ),
            ] : [],
            ...(target === TARGET_EDGE) ? [
                new webpack.NormalModuleReplacementPlugin(
                    /(.*)target.cloud(\.*)/,
                    resource => resource.request = resource.request.replace(/cloud/, 'edge')
                ),
            ] : [],
        ],
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ],
        }
    };

    return configuration;
};
