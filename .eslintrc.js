module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/self-closing-comp': 'error',
    'react/destructuring-assignment': 'error',
    'react/no-unescaped-entities': 'error',
    'react/react-in-jsx-scope': 0,
  },
}
