const path = require('path')
const webpack = require('webpack')

// addition plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// module settings 

module.exports = {
    // базовий шлях до проекту 

    context: path.resolve(__dirname, 'src'),

    // настройка точек входа  js

    entry: {
        // основний файл приложения 
        app: [
            './js/index.js',
            './scss/style.scss'
        ],
    },

    //путь для осбраних файлов 
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
    },

    module: {
        rules: [
            // SCSS
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true}
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true}
                        },
                    ],
                    fallback: 'style-loader',
                })
            },
        ],
    },

    plugins:[
        new ExtractTextPlugin(
            './css/[name].css',
        ),
    ],
}