module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort", "import"],
  parser: "@typescript-eslint/parser",
  rules: {
    "consistent-return": "error", // https://eslint.org/docs/latest/rules/consistent-return
    complexity: ["warn", 15], // https://eslint.org/docs/latest/rules/complexity
    curly: "error", // https://eslint.org/docs/latest/rules/curly
    "default-case": "warn", // https://eslint.org/docs/latest/rules/default-case
    "default-case-last": "warn", // https://eslint.org/docs/latest/rules/default-case-last
    "default-param-last": "warn", // https://eslint.org/docs/latest/rules/default-param-last
    eqeqeq: "error", // https://eslint.org/docs/latest/rules/eqeqeq
    "guard-for-in": "warn", // https://eslint.org/docs/latest/rules/guard-for-in
    "logical-assignment-operators": "warn", // https://eslint.org/docs/latest/rules/logical-assignment-operators
    "no-caller": "error", // https://eslint.org/docs/latest/rules/no-caller
    "no-console": ["warn", { allow: ["warn", "error"] }], // https://eslint.org/docs/latest/rules/no-console
    "no-eval": "error", // https://eslint.org/docs/latest/rules/no-eval
    "no-extend-native": "error", // https://eslint.org/docs/latest/rules/no-extend-native
    "no-extra-bind": "error", // https://eslint.org/docs/latest/rules/no-extra-bind
    "no-floating-decimal": "error", // https://eslint.org/docs/latest/rules/no-floating-decimal
    "no-implicit-coercion": "warn", // https://eslint.org/docs/latest/rules/no-implicit-coercion
    "no-implied-eval": "error", // https://eslint.org/docs/latest/rules/no-implied-eval
    "no-loop-func": "error", // https://eslint.org/docs/latest/rules/no-loop-func
    "no-multi-str": "error", // https://eslint.org/docs/latest/rules/no-multi-str
    "no-nested-ternary": "error", // https://eslint.org/docs/latest/rules/no-nested-ternary
    "no-new": "error", // https://eslint.org/docs/latest/rules/no-new
    "no-new-func": "error", // https://eslint.org/docs/latest/rules/no-new-func
    "no-new-object": "error", // https://eslint.org/docs/latest/rules/no-new-object
    "no-new-wrappers": "error", // https://eslint.org/docs/latest/rules/no-new-wrappers
    "no-octal-escape": "error", // https://eslint.org/docs/latest/rules/no-octal-escape
    "no-param-reassign": "error", // https://eslint.org/docs/latest/rules/no-param-reassign
    "no-promise-executor-return": "error", // https://eslint.org/docs/latest/rules/no-promise-executor-return
    "no-proto": "error", // https://eslint.org/docs/latest/rules/no-proto
    "no-return-assign": "error", // https://eslint.org/docs/latest/rules/no-return-assign
    "no-script-url": "error", // https://eslint.org/docs/latest/rules/no-script-url
    "no-self-compare": "error", // https://eslint.org/docs/latest/rules/no-self-compare
    "no-sequences": "error", // https://eslint.org/docs/latest/rules/no-sequences
    "no-shadow": "error", // https://eslint.org/docs/latest/rules/no-shadow
    "no-throw-literal": "error", // https://eslint.org/docs/latest/rules/no-throw-literal
    "one-var": ["error", "never"], // https://eslint.org/docs/latest/rules/one-var
    "operator-assignment": "error", // https://eslint.org/docs/latest/rules/operator-assignment
    radix: ["error", "as-needed"], // https://eslint.org/docs/latest/rules/radix
    "wrap-iife": ["error", "inside"], // https://eslint.org/docs/latest/rules/wrap-iife
    "@typescript-eslint/dot-notation": [
      "error",
      {
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
        allowIndexSignaturePropertyAccess: true,
      },
    ], // https://typescript-eslint.io/rules/dot-notation/
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ], // https://typescript-eslint.io/rules/naming-convention
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ], // https://typescript-eslint.io/rules/no-unused-vars/
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
