module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  plugins: ["import", "unused-imports","@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
  "warn",
  {
    "vars": "all",
    "varsIgnorePattern": "^_",
    "args": "after-used",
    "argsIgnorePattern": "^_"
  }
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
          "object",
          "type"
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc"
        }
      }
    ]
  },
};

