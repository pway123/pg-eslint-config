const eslintJs = require("@eslint/js");
const tsEslint = require("typescript-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");
const eslintPluginSimpleImportSort = require("eslint-plugin-simple-import-sort");
const eslintPluginImport = require("eslint-plugin-import");
const eslintPluginJest = require("eslint-plugin-jest");
const eslintPluginReact = require("eslint-plugin-react");
const eslintPluginJsxA11y = require("eslint-plugin-jsx-a11y");
const globals = require("globals");

const recommendedConfig = tsEslint.config(
  eslintJs.configs.recommended,
  {
    name: "recommended",
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
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
    },
  },
  eslintConfigPrettier // turn off rules that conflict with Prettier
);

const typescriptConfig = tsEslint.config(
  ...tsEslint.configs.strictTypeChecked.map((config) => {
    return { ...config, files: ["**/*.{ts,tsx}"] };
  }),
  ...tsEslint.configs.stylisticTypeChecked.map((config) => {
    return { ...config, files: ["**/*.{ts,tsx}"] };
  }),
  {
    name: "typescript",
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": [
        // https://typescript-eslint.io/rules/consistent-type-definitions/
        "error",
        "type",
      ],
      "@typescript-eslint/dot-notation": [
        // https://typescript-eslint.io/rules/dot-notation/
        "error",
        {
          allowPrivateClassPropertyAccess: true,
          allowProtectedClassPropertyAccess: true,
          allowIndexSignaturePropertyAccess: true,
        },
      ],
      "@typescript-eslint/naming-convention": [
        // https://typescript-eslint.io/rules/naming-convention
        "error",
        {
          // https://typescript-eslint.io/rules/naming-convention/#enforce-that-type-parameters-generics-are-prefixed-with-t
          selector: "typeParameter",
          format: ["PascalCase"],
          prefix: ["T"],
        },
        {
          // https://typescript-eslint.io/rules/naming-convention/#enforce-that-interface-names-do-not-begin-with-an-i
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        // https://typescript-eslint.io/rules/no-unused-vars/
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  eslintConfigPrettier // turn off rules that conflict with Prettier
);

const importConfig = tsEslint.config({
  // A minimal set of import rules. Rely on TypeScript for the rest.
  name: "import",
  plugins: {
    "simple-import-sort": eslintPluginSimpleImportSort,
    import: { rules: eslintPluginImport.rules },
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
});

const jestConfig = tsEslint.config({
  name: "jest",
  files: [
    "**/{test,tests}/**/*.{js,jsx,ts,tsx}",
    "**/*.{test,spec}.{js,jsx,ts,tsx}",
  ],
  ...eslintPluginJest.configs["flat/all"],
});

const reactConfig = tsEslint.config({
  name: "react",
  ...eslintPluginReact.configs.flat.recommended,
  files: ["**/*.{jsx,tsx}"],
  languageOptions: {
    ...eslintPluginReact.configs.flat.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
  rules: {
    ...eslintPluginReact.configs.flat.recommended.rules,
    "react/jsx-filename-extension": [
      "error",
      {
        allow: "as-needed",
        extensions: [".jsx", ".tsx"],
        ignoreFilesWithoutCode: true,
      },
    ],
  },
});

const jsxA11yConfig = tsEslint.config({
  name: "jsx-a11y",
  ...eslintPluginJsxA11y.flatConfigs.recommended,
  files: ["**/*.{jsx,tsx}"],
  languageOptions: {
    ...eslintPluginJsxA11y.flatConfigs.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
});

module.exports = {
  configs: {
    all: [
      ...recommendedConfig,
      ...typescriptConfig,
      ...importConfig,
      ...jestConfig,
      ...reactConfig,
      ...jsxA11yConfig,
    ],
    recommended: recommendedConfig,
    typescript: typescriptConfig,
    import: importConfig,
    jest: jestConfig,
    react: reactConfig,
    jsxA11y: jsxA11yConfig,
  },
  reexports: {
    eslintJs,
    tsEslint,
    eslintConfigPrettier,
    eslintPluginSimpleImportSort,
    eslintPluginImport,
    eslintPluginJest,
    eslintPluginReact,
    eslintPluginJsxA11y,
    globals,
  },
};
