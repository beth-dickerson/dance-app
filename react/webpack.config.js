var config = {
  entry: {
        path: __dirname + '/src/main.js',
  },
  output: {
        path: __dirname + '/../app/assets/javascripts',
    filename: 'application.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  delete config.devtool;
  var webpack = require('webpack');
  config.plugins = [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
  ];
}

module.exports = config;
