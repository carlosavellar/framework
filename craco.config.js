const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
var webpack = require("webpack");
module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          process: require.resolve("process/browser"),
          zlib: require.resolve("browserify-zlib"),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util"),
          buffer: require.resolve("buffer"),
          asset: require.resolve("assert"),
        },
      },
      plugins: [
        new NodePolyfillPlugin(),
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ],
    },
  },
};
