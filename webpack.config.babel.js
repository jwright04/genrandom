import {join} from 'path'

const include = join(__dirname, 'src');

export default {
    entry: './src/genrandom',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'genrandom',
    },
    devtool: 'source-map',
    module: {
        rules: [

        ]
    },
    mode: 'production',
}
