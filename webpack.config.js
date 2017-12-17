const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8080";


module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Planet',
            template: './public/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("[name].css")
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        host:HOST,
        port:PORT,
        compress: true,
        disableHostCheck: true,
        stats: {
            assets: true,
            timings: true,
            warnings: true,
            publicPath: true
        }
    }
}
