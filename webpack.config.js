const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    hot: true //热更新，修改代码后，不刷新整个页面
   },
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: '/node_modules/'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ],
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
};
