import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/display-name": "off",
      "react/prop-types": "off",
      "newline-before-return": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/migration-from-tailwind-2": "off",
      "import/no-unresolved": "off",
      "import/no-named-as-default": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "expression",
          next: "expression",
        },
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "after",
            },
            {
              pattern: "next-themes",
              group: "external",
              position: "after",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];

export default eslintConfig;
