module.exports = {
  files: ["*.ts", "*.tsx"],
  extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  plugins: ["react", "jsx-a11y", "react-hooks"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-max-props-per-line": [
      2,
      {
        maximum: 3
      }
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "jsx-a11y/tabindex-no-positive": 2,
    "react/no-did-mount-set-state": "off",
    "react-hooks/rules-of-hooks": "warn"
  }
};
