import {join} from 'path'

const include = join(__dirname, 'src')

export default {
    entry: './src/genrandom',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'genrandom',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include,
                query: {
                    presets: ['es2015', 'stage-2']
                }
            },
            {
                test: /\.json$/,
                loader: 'json',
                include,
                query: {
                    presets: ['es2015', 'stage-2']
                }
            },
        ]
    },
}