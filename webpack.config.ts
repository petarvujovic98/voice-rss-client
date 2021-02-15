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
  entry: "./src/browser/index.ts",
  output: {
    filename: "browser.js",
  },
});

const nodeConfig: Configuration = merge(commonConfig, {
  target: "node",
  entry: "./src/node/index.ts",
  output: {
    filename: "node.js",
  },
});

export default [bundledConfig, browserConfig, nodeConfig];
