module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/all",
    "plugin:jsx-a11y/recommended",
    "airbnb-base",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "plugin:unicorn/all",
    "prettier",
    "plugin:sonarjs/recommended"
  ],
  "ignorePatterns": [
    ".next",
    ".vscode",
    ".yarn",
    "build",
    "dist",
    "node_modules",
    ".eslintrc.cjs"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react-refresh",
    "@typescript-eslint",
    "jsdoc"
  ],
  "parserOptions": {
    "project": [
      "./tsconfig.json",
      "./tsconfig.node.json"
    ]
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "warn",
    "no-console": "error",
    "no-underscore-dangle": "warn",
    "react/destructuring-assignment": "off",
    "react/forbid-component-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-max-depth": [2, { "max": 5 }],
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "off",
    "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }],
    "prefer-destructuring": "off",
    "unicorn/new-for-builtins": "off",
    "unicorn/no-new-array": "off",
    "unicorn/prevent-abbreviations": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
