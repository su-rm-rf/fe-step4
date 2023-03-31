const { resolve, join } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'static/[name].[chunkhash:8].js',
    publicPath: '/'
  },
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
          appendTsSuffixTo: [/\.vue$/]
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
      '@': join(__dirname, '../src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/[name].[chunkhash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'),
      title: 'fe-step2'
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  optimization: {
    splitChunks: {
      
    }
  }
}