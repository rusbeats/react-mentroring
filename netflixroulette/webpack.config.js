const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => ({
  mode: env,
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.join(__dirname, 'built'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015', 'es2016', 'es2017', 'react'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve:
          {
            extensions: ['.js', '.jsx'],
          },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './index.html',
      },
    ),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },
  devServer: {
    hot: true,
  },
  watch: true,
});
