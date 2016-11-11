const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client', 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'client', 'dist')
  }
};