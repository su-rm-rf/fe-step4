const { resolve, join } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        }
      },
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                presets: ['postcss-preset-env']
              }
            }
          },
          'less-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 10
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.js', '.json', '.scss'],
    alias: {
      '@': join(__dirname, '../src/client')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // filename: 'static/[name].[chunkhash:8].css'
      filename: 'main.css'
    }),
    // new HtmlWebpackPlugin({
    //   template: resolve(__dirname, '../public/index.html'),
    //   title: 'fe-step2'
    // }),
    new CopyPlugin({
      patterns: [
        { from: resolve(__dirname, '../public'), to: resolve(__dirname, '../dist')}
      ]
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  optimization: {
    splitChunks: {
      
    }
  }
}