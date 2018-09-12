module.exports = {
  extends: ["standard", "prettier"],
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
  },
  plugins: ["prettier", "sort-imports-es6-autofix"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        trailingComma: "all",
        arrowParens: "always",
      },
    ],
    yoda: ["error", "never", { exceptRange: true }],
    "no-unused-vars": "error",
    "dot-notation": "error",
    "linebreak-style": ["error", "unix"],
    "no-lonely-if": "error",
    "sort-imports-es6-autofix/sort-imports-es6": [
      "error",
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "single", "multiple", "all"],
      },
    ],
  },
};
