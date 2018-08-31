'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  // Stop ESLint from looking for a configuration file in parent folders
  root: true,
  parser: 'babel-eslint',
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
    'object-curly-newline': 'off', //import 多个object不一定需要换行
    'arrow-parens': ['error', 'as-needed'], //匿名函数只有一个参数时,可以省略参数括号
    'react/prop-types': ['enabled', { ignore: ['form'] }], // prop types 搞不到 antd 表单组件里的 form
  },
};
