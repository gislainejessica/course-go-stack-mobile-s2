module.exports = {
  env: {
    es6: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/react'
  ],
  globals: {
    __DEV__: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins:[
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn', {extensions:['.jsx', '.js']}
    ],
    'import/prefer-export-default': 'off'

  }
}
