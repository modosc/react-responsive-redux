module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb', 'plugin:unicorn/recommended', 'plugin:react/all',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
    'mocha',
    'babel',
    'unicorn',
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

  },
}
