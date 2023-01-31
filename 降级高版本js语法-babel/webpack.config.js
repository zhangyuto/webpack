const path = require('path');
// import path from 'path'.
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // plugins: [new HtmlWebpackPlugin({
  //   template: './pubilc/index.html'
  // })],
  plugins: [new HtmlWebpackPlugin({ // plugins插件配置
    template: './public/index.html' // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)/,
        type: 'asset',
       },
       {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        type: 'asset/resource',
        generator: {
          filename:'font/[name].[hash:6][ext]'
        }
       },
       {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};