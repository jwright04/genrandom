'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var include = (0, _path.join)(__dirname, 'src');

exports.default = {
    entry: './src/genrandom',
    output: {
        path: (0, _path.join)(__dirname, 'umd'),
        libraryTarget: 'umd',
        library: 'genrandom'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: include
        }, {
            test: /\.json$/,
            loader: 'json',
            include: include
        }]
    }
};