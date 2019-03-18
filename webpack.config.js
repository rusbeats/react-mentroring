const path = require("path");
const SRC_DIR = path.resolve(__dirname, "src");
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require("webpack");

module.exports={
    context: path.join(__dirname,'src'),
    entry:'./entry.js',
    output:{
        filename:'bundle.js',
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
      resolve:{
        extensions:['.js', '.jsx']
    },

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
    watch: NODE_ENV == 'development'
};
