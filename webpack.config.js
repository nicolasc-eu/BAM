var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var path = require('path');


module.exports = [
    {
        entry: {
            'polyfills': './app/misc/polyfills.browser',
            'vendor': './app/misc/vendor',
            'main': './app/main'
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: '[name].[hash].js',
            chunkFilename: '[id].[hash].chunk.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [{
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'tsconfig.json'
                        }
                    }, 'angular2-template-loader']
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'file-loader?name=assets/[name].[hash].[ext]'
                },
                {
                    test: /\.scss$/,
                    exclude: 'app',
                    loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.css$/,
                    include: 'app',
                    loader: 'raw-loader'
                }
            ]
        },
        plugins: [
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                __dirname
            ),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['main', 'polyfills']
            }),
            new HtmlWebpackPlugin({
                title: 'PACK',
                template: './app/index.ejs'
            })
        ]
    }
];
