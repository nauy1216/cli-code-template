module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    "eslint-config-prettier/@typescript-eslint"
  ],
  rules: { 
    "no-console":  "warn",
  },
  overrides: []
}
