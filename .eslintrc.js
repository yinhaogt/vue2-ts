module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // parser: 'vue-eslint-parser',
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['prettier', 'vue'],
  rules: {
    'no-var': 'error',
    'no-delete-var': 'error'
  }
}
