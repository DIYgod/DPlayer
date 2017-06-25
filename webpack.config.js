var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var libraryName = 'DPlayer';
var env = process.env.WEBPACK_ENV;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var dev = env === 'dev';
var plugins = [].concat(dev ? [] : [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compressor: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
            negate_iife: false
        },
        output: {
            comments: false
        }
    }),
    new ExtractTextPlugin(`${libraryName}.min.css`)
]);

module.exports = {
    entry: './src/' + libraryName + '.js',

    output: {
        path: BUILD_PATH,
        filename: libraryName + '.min.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    devtool: dev ? 'eval-source-map' : 'source-map',

    devServer: {
        publicPath: "/dist/",
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                include: APP_PATH,
                options: {
                    configFile: './.eslintrc'
                },
            },
            {
                test: /\.js$/,
                loader: 'template-string-optimize-loader',
                include: APP_PATH,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: APP_PATH,
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: dev ? ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] : ExtractTextPlugin.extract({
                    use: ['css-loader?minimize&-autoprefixer', 'postcss-loader', 'sass-loader']
                }),
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            }
        ]
    },

    plugins: plugins
};