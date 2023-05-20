module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 'off',
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 'off',
    'no-unused-expressions': 'off',
    'no-var': 'off',
    'no-unused-vars': 'off'
  }
}
