const defaultSetting = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        targets: { node: "current" },
        debug: true,
      },
    ],
  ],
  plugins: [],
};

module.exports = (api) => {
  api.cache.invalidate(() => process.env.BABEL_ENV || process.env.NODE_ENV);

  const env = api.env();

  switch (env) {
    case "development":
      return {
        ...defaultSetting,
      };
    case "production":
      return {
        ...defaultSetting,
      };
    case "webpack":
      return defaultSetting;
  }
};
