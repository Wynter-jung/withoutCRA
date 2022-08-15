const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: false,
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    liveReload: true,
  },
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
});

