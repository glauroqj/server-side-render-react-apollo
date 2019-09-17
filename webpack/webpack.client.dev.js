const path = require('path')
// const Dotenv = require('dotenv-webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  name: 'client',
  entry: './src/__client/client.js'
  ,
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: path.resolve( __dirname, '../build/client' ),
    chunkFilename: '[name].bundle.js',
    filename: 'client.bundle.js'
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     name: false,
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendor',
  //         chunks: 'all',
  //         enforce: true
  //       },
  //       assets: {
  //         test: /[\\/](assets|components|_sharedComponents|_sharedStyle)[\\/]/,
  //         name: 'assets',
  //         chunks: 'all',
  //         enforce: true
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
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
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),
    // new Dotenv({
    //   path: `./infra/${process.env.INFRA_PATH}/.env`
    // }),
  ]
}