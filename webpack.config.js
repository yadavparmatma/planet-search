const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HOST = process.env.HOST || "127.0.0.1";
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
        stats: {
            assets: true,
            timings: true,
            warnings: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            version: false
        }
    }
}
