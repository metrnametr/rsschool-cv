const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.bandle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
      }
};