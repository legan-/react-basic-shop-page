const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('./paths');
const config = require('./index');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.public + '/index.html',
  meta: { viewport: 'width=device-width, initial-scale=1' },
  inject: 'body',
  title: config.name
});

const hmrPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [path.src + '/index'],
  output: {
    path: path.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    host: config.host,
    port: config.clientPort,
    inline: true,
    disableHostCheck: true,
    stats: {
      chunks: false,
      chunkGroups: false,
      chunkOrigins: false,
      chunkModules: false,
      modules: false,
      children: false,
    },
  },
  plugins: [htmlPlugin, hmrPlugin],
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
