const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    context: path.join(__dirname,'src'),
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
        }
      ]},
      resolve:
          {
          extensions:['.js', '.jsx']
          },

          plugins:[
            new HtmlWebpackPlugin(
              {
                template: './index.html'
              })
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
    watch: false
};
