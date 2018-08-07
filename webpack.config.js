const path = require('path')

module.exports = {
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
        test: /\.(css|scss)$/,
        use: [
            "style-loader", 
            "css-loader",
            "sass-loader" 
        ]
    },
    {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }]
   },
   devServer: {
    contentBase:  path.join(__dirname, 'public'),
    historyApiFallback: true,
},

}
