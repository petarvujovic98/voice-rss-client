import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { resolve } from "path";
import { Configuration, ProgressPlugin } from "webpack";
import { merge } from "webpack-merge";

const commonConfig: Configuration = {
  mode: "production",
  devtool: "inline-source-map",
  plugins: [new ProgressPlugin()],
  output: {
    path: resolve(__dirname, "dist"),
    library: "VoiceRSSClient",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        include: [resolve(__dirname, "src")],
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};

const bundledConfig: Configuration = merge(commonConfig, {
  target: "node",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
  },
});

const browserConfig: Configuration = merge(commonConfig, {
  entry: "./src/browser.ts",
  output: {
    filename: "browser.js",
  },
});

const nodeConfig: Configuration = merge(commonConfig, {
  target: "node",
  entry: "./src/node.ts",
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: "node.js",
  },
});

export default [bundledConfig, browserConfig, nodeConfig];
