import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

module.exports = {
  webpack: {
    plugins: [new NodePolyfillPlugin()],
  },
};
