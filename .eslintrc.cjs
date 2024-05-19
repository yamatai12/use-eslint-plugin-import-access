module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "warn",
    "@typescript-eslint/prefer-includes": "error"
  }
};
