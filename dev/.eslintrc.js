'use strict';

module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: 'standard',
  plugins: ['standard', 'promise'],
  rules: {
    semi: [2, 'always'],
    'no-extra-semi': 2
  }
};
