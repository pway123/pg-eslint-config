const customEslintBase = require("./index");

module.exports = [
  ...customEslintBase.configs.all,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  {
    settings: {
      react: {
        version: "16",
      },
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    ...customEslintBase.reexports.eslintPluginReact.configs.flat["jsx-runtime"],
  },
  {
    files: ["eslint.config.js", "index.js"],
    rules: {
      "no-undef": "off", // https://eslint.org/docs/latest/rules/no-undef
    },
  },
];
