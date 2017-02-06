var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var libraryName = 'DPlayer';
var env = process.env.WEBPACK_ENV;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var plugins = [];
if (env !== 'dev') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    );
}

module.exports = {
    entry: './src/' + libraryName + '.js',

    output: {
        path: BUILD_PATH,
        filename: libraryName + '.min.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    devtool: 'source-map',

    devServer: {
        publicPath: "/dist/",
    },

    module: {
        rules: [
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
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
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