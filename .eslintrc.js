module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb', 'plugin:unicorn/recommended', 'plugin:react/all',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    requireConfigFile: true,
  },
  plugins: [
    'react',
    'babel',
    'unicorn',
    'jest',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'never',
    ],
    strict: 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-literals': 0,
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'unicorn/prevent-abbreviations': 0,
  },
}
