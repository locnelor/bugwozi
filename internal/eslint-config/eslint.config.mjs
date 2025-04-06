// 全局 ESLint 配置
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import nextConfig from "eslint-config-next";

export default [
  js.configs.recommended, // JavaScript 规则
  ts.configs.recommended, // TypeScript 规则
  nextConfig, // Next.js 规则
  react.configs.recommended, // React 规则
  reactHooks.configs.recommended, // React Hooks 规则
  {
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
  {
    rules: {
      "prettier/prettier": "error",
      "import/order": ["error", { alphabetize: { order: "asc" } }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "nestjs/use-validation-pipe": "error",
      "tailwindcss/no-custom-classname": "off",
      "jsonc/auto": "error",
      "jsonc/no-comments": "off",
      "git/no-merge-conflict": "error",
      "git/no-debugger": "error",
      "eslint-comments/no-unused-disable": "error",
    },
  },
];