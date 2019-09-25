const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const Dotenv = require('dotenv-webpack')

module.exports = {
  name: 'client',
  entry: './src/__client/client.js'
  ,
  mode: 'production',
  output: {
    path: path.resolve( __dirname, '../build/client' ),
    chunkFilename: '[name].bundle.js',
    filename: 'client.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
    })
  ]
}