const path = require('path')


module.exports = () => {

    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ] 
        }]
    },
    devServer: {
        contentBase:  path.join(__dirname, 'public'),
        historyApiFallback: true,
        }
    }
}
