const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require("./webpack.common")

const prod_config = {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ],
  },
  plugins: [
  ]
}

module.exports = merge(common, prod_config)