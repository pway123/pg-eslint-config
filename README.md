# pg-eslint-config

NOTE: ESLint 9 [requires an updated Node.js](https://eslint.org/docs/latest/use/migrate-to-9.0.0#-nodejs--v1818-v19-are-no-longer-supported), so it should be done later when all packages satisfy this limitation.

Linting rules are meant to be opiniated, trading freedom for reduction in bugs. However, each repo can edit their `eslint.config.js` to adapt to their use cases.

In the event that a change would likely be desirable to the majority of users, do propose the rule changes here instead.

## Usage

For NPM, run the following to install:
```
npm install -D @pgateway/eslint-config-base
```
This package should also work on other package managers.

Create the ESLint flat config in `eslint.config.js` at the project root. A good default is the following, which should be sufficient for most basic use cases:
```
import customEslintBase from '@pgateway/eslint-config-base';

export default [
  ...customEslintBase.configs.all,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
];
```

## Altering ESLint rules

There would be a need to alter some rules (hopefully not too many). E.g. from React 17 onwards there's no longer a need to import React in JSX files so we will want that check removed. The rule changes can be appended to the exported config, e.g.:
```
import customEslintBase from '@pgateway/eslint-config-base';

export default [
  ...customEslintBase.configs.all,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    ...customEslintBase.reexports.eslintPluginReact.configs.flat["jsx-runtime"],
  },
];
```

Similarly if there are single rules to toggle, we append an object containing `files` and `rules`.

To ensure that the dependencies use the same versions, they are re-exported so there's not a need to add them within the project again.
