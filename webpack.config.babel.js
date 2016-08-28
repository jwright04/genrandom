import {join} from 'path';

const include = join(__dirname, 'src');

export default {
    entry   : './src/genrandom',
    output  : {
        path          : join(__dirname, 'dist'),
        libraryTarget : 'umd',
        library       : 'genrandom'
    },
    devtool : 'source-map',
    module  : {
        loaders : [
            {
                test   : /\.js$/,
                loader : 'babel',
                include
            },
            {
                test   : /\.json$/,
                loader : 'json',
                include
            }
        ]
    }
}