const path = require("path");
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./index.js" /*"./assets/styles/app.styl" */],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  context: path.resolve(__dirname, "src"),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      inject: true,
      favicon: "./assets/images/favicon.ico",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|woff|woff2|ico|eot|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
              limit: 20000,
            },
          },
        ],
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ya?ml$/,
        type: "json",
        use: "yaml-loader",
      },
    ],
  },
  resolve: {
    alias: {
      _: path.resolve(__dirname, "./src"),
      stream: "stream-browserify",
      zlib: "browserify-zlib",
    },
    extensions: [".js", ".jsx"],
    fallback: {
      crypto: false,
      buffer: require.resolve("buffer"),
      events: false,
      util: require.resolve("util"),
      stream: require.resolve("stream"),
    },
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
