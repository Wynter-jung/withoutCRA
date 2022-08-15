const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry:'./src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
       },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'public/index.html',
        // 문서 메타
        meta: {
            'theme-color': '#4285f4',
            'description': 'without cra',
        },
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..src/"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};

