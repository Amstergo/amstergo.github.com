{
  // Configuration for JavaScript files
  module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: ["airbnb-typescript", "prettier", "plugin:import/typescript"],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
      createDefaultProgram: true,
    },
    plugins: ["react", "prettier", "@typescript-eslint", "import"],
    rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "": "never", // fix error airbnb, ts paths with @
        },
      ],
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  };
}

// Configuration for testing
//     {
//       "files": ["**/*.test.ts", "**/*.test.tsx"],
//       "plugins": ["jest", "jest-formatting", "testing-library", "jest-dom"],
//       "extends": [
//         "plugin:jest/recommended",
//         "plugin:jest-formatting/recommended",
//         "plugin:testing-library/react",
//         "plugin:jest-dom/recommended"
//       ]
//     },
//     // Configuration for e2e testing (Cypress)
//     {
//       "files": ["cypress/**/*.ts"],
//       "plugins": ["cypress"],
//       "extends": ["plugin:cypress/recommended"],
//       "parserOptions": {
//         "project": "./cypress/tsconfig.json"
//       }
//     }
//   ]
