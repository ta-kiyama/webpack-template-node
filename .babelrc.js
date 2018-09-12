const path = require("path");

const defaultSetting = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" }, debug: true }],
  ],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        root: ["."],
        alias: {
          "@": path.resolve(__dirname, "src"),
          "@@": __dirname,
        },
      },
    ],
  ],
};

module.exports = {
  env: {
    webpack: {
      ...defaultSetting,
    },
    development: {
      ...defaultSetting,
    },
    production: {
      ...defaultSetting,
    },
  },
};
