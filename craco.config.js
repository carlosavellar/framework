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
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: "file-loader",
          options: {
            outputPath: (url, resourcePath, context) => {
              // `resourcePath` is original absolute path to asset
              // `context` is directory where stored asset (`rootContext`) or `context` option

              // To get relative path you can use
              // const relativePath = path.relative(context, resourcePath);

              if (/my-custom-image\.png/.test(resourcePath)) {
                return `other_output_path/${url}`;
              }

              if (/images/.test(context)) {
                return `image_output_path/${url}`;
              }

              return `output_path/${url}`;
            },
          },
        },
        ,
      ],
    },
  },
};
