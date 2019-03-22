module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "@typescript-eslint/indent": ["error", 2, { SwitchCase: 1 }],
    "@typescript-eslint/interface-name-prefix": 0
  }
};
