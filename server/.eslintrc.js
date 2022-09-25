module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    camelcase: "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
  },
};
