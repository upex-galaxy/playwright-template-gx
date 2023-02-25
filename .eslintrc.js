export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['only-warn'],
  rules: {
    "indent": ["tab", { "SwitchCase": 1 }],
    "no-tabs": 0,
    "semi": ["never"],
    "quotes": ["single"],
    "comma-dangle": ["only-multiline"],
    "no-multiple-empty-lines": [{ "max": 2, "maxBOF": 0, "maxEOF": 1 }],
    "object-curly-spacing": ["always"],
    "@typescript-eslint/explicit-function-return-type": ["warn", {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true
    }],
  },
  overrides: [
  ],
}
