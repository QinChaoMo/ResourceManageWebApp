'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  env: {
    browser: true,
    jest: true,
  },
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['webpack.*.js'] },
    ],
  },
};
