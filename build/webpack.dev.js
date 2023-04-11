const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require("./webpack.common")

const dev_config = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8221,
    hot: true,
    historyApiFallback: true,
    proxy: {

    }
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: resolve(__dirname, '../dist/.temp_cache')
  }
}

module.exports = merge(common, dev_config)