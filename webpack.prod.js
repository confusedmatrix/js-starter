const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: '[name].css',
})
const AppHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
    chunks: ['app']
})

module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [ 'babel-loader' ],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.jsx$/,
                use: [ 'babel-loader' ],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /(\.sass|\.scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader',
                    ],
                }),
            },
            {
                test: /\.(gif|jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            }
        ],
    },
    plugins: [
        ExtractTextPluginConfig,
        AppHtmlWebpackPluginConfig,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ],
    watchOptions: {
        ignored: /node_modules/,
    },
}