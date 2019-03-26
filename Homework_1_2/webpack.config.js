const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    context: path.join(__dirname,'src'),
    devtool: 'source-map',
    entry:'./entry.js',
    output:{
        filename:'bundle.js',
        publicPath: '/',
        path: path.join(__dirname, 'built'),
    },

    module: { rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [/node_modules/],
          query: {
            presets: ['es2015',"es2016","es2017", "react"]
            }
        },
        {
          test: /\.css$/,
          use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              "css-loader"
      ]}]},
      resolve:
          {
          extensions:['.js', '.jsx']
          },

          plugins:[
            new HtmlWebpackPlugin(
              {
                template: './index.html'
              }),
              new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
              }),
              new webpack.HotModuleReplacementPlugin()
          ],
          optimization: {
              splitChunks: {
                cacheGroups: {
                  commons: {
                    name: "commons",
                    chunks: "all",
                    minSize: 0,
                    minChunks: 2
                  }
                }
              }
            },
        devServer:{
          hot: true,
        },
    watch: false
};
