'use strict';

module.exports = {
  parserOptions: { ecmaVersion: 5 },
  env: {
    es6: false,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'consistent-return': 0,
    'no-use-before-define': ['error', { functions: false }],
    'no-var': 0,
    strict: 0,
    'vars-on-top': 0
  }
};
