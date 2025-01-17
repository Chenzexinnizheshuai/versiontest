const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const versionPlugin = require('./build/version')
module.exports = {
  entry: './src/main.js',
  mode: 'development',
  devServer: {
    static: './dist'
  },
  devtool: 'source-map',
  // module:模块,一个文件就是一个模块
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`
    }),
    new versionPlugin(+new Date())
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}