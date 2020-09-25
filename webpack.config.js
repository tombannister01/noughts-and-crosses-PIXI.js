const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  devServer: {
    // open: true
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      inject: 'head',
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'resources',
        to: 'resources'
      }]
    })
  ]
}