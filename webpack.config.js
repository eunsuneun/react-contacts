const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 4000,
    static: __dirname + '/public/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
      //   plugins: [
      //   "react-hot-loader/babel",
      // ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}