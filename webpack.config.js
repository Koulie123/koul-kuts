const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: "./src/index.html",
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    mode: 'development',
    module: {
        rules: [

            {
      
              test: /\.css$/i,
      
              use: ['style-loader', 'css-loader'],
      
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
        
                type: 'asset/resource',        
            },
        ]
    }
};