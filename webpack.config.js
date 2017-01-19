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
            compress: {
                warnings: false
            },
            minimize: true
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
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }
        ]
    },

    plugins: plugins,

    postcss: [
        autoprefixer({
            browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7']
        })
    ]
};