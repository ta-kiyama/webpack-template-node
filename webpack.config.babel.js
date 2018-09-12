import nodeExternals from "webpack-node-externals";
import NodemonPlugin from "nodemon-webpack-plugin";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

delete process.env.BABEL_ENV;

export default {
  mode: isDev ? "development" : "production",
  entry: "./src/index.js",
  target: "node",
  node: {
    __filename: true,
    __dirname: true,
  },
  externals: [nodeExternals()],
  output: {
    filename: "server.js",
    chunkFilename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true,
        },
      },
    ],
  },
  plugins: [
    new NodemonPlugin({
      watch: path.resolve("./dist"),
      verbose: isDev,
      ignore: ["*.js.map"],
      script: "./dist/server.js",
      ext: "js",
    }),
  ],
};
