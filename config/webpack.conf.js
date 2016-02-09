var path = require('path');
var pkg = require('../package.json');
var webpack = require('webpack');

var constantPack = new webpack.DefinePlugin({
    CROP_VERSION: JSON.stringify(pkg.version)
});

var BANNER =
    'Module Spiral and sf.js v'+pkg.version+'\n' +
    '';

var bannerPlugin = new webpack.BannerPlugin(BANNER);
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    minimize: true,
    compress: {
        warnings: false
    }
});

module.exports = {
    entry: {
        "sf.module.name": './src/index.js',  // webpack workaround issue #300
        "sf.module-name": './src/index.js'  // webpack workaround issue #300
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '..', 'dist/')
    },
    resolve: {
        alias: {
            'sf': path.resolve(__dirname, '..', 'node_modules/sf/src/sf')
        },
        extensions: ['', '.js']
    },
    resolveLoader: {
        root: path.resolve(__dirname, '..', 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel?presets[]=es2015&plugins[]=transform-runtime&compact=false',
                exclude: /node_modules/
            }
        ],
        noParse: []
    },
    devtool: 'source-map',
    plugins: [constantPack, bannerPlugin, uglifyJsPlugin],
    externals: {
        "sf": "sf"
    }
};
