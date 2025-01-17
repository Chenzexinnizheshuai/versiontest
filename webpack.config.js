const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const versionPlugin = require('./build/version')
const cp = require("child_process");
let commitHash = '0'
// 执行一个shell命令，使用git rev-parse --short HEAD来获取当前git仓库的commit哈希值
commitHash = cp.execSync("git rev-parse --short HEAD").toString().trim();
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
    new versionPlugin(commitHash)
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}