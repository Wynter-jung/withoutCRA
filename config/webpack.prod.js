const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map",
  output:{
    path: __dirname + '/dist',
    filename: 'bundle.[chunkhash].js' // 어플리케이션이 수정되어 다시 컴파일 될 때마다 웹팩에서 생성된 해시로 변경해 캐싱에 도움이 된다
 },
  module: {
    rules: [
        // @ts-ignore
        {
          test: /\.(sa|sc|c)ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
