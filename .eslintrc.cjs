module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "no-unused-vars": "error",
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/self-closing-comp": "warn",
    "react/display-name": "off",
    "no-undef": "error", // 미정의 변수
    "no-unused-vars": "error", // 사용 안 하는 변수
    "react/jsx-no-undef": "error", // 미정의 컴포넌트
  },
};
