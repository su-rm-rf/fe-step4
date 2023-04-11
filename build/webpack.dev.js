const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require("./webpack.common")
const nodeExternals = require('webpack-node-externals')

const client = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: './src/client/index.tsx',
  output: {
    path: resolve(__dirname, '../dist/static'),
    filename: 'client.js',
    publicPath: '/'
  }
})

const server = merge(common, {
  mode: 'development',
  entry: './src/server/index.tsx',
  output: {
    path: resolve(__dirname, '../dist/static'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: [nodeExternals()]
})


module.exports = [client, server]