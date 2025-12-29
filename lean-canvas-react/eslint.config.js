import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  // node_modules 내부의 eslint.config.* 파일을 모두 무시하도록 강제
  {
    ignores: ["node_modules/**"],
  },

  {
    files: ["**/*.{js,jsx}"],

    plugins: {
      react,
    },

    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      "prettier",
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: { jsx: true },
      globals: globals.browser,
    },

    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react/self-closing-comp": "warn",
    },
  },
]);
