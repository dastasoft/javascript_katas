module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['plugin:jest/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['jest'],
  rules: {},
}
