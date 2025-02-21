import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import i18Next from "eslint-plugin-i18next";
import reactHooks from "eslint-plugin-react-hooks";
import malini4Plugin from "eslint-plugin-malini4-plugin";
import unusedImports from "eslint-plugin-unused-imports";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
    "prettier",
), {
    plugins: {
        react,
        "@typescript-eslint": typescriptEslint,
        i18next: i18Next,
        "react-hooks": fixupPluginRules(reactHooks),
        "malini4-plugin": malini4Plugin,
        "unused-imports": unusedImports,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
            __IS_DEV__: true,
            __API__: true,
            __PROJECT__: true,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    rules: {
        "no-unused-vars": 0,
        "unused-imports/no-unused-imports": "error",
        "no-console": "off",

        "react/jsx-filename-extension": [2, {
            extensions: [".js", ".jsx", ".tsx"],
        }],

        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "react/no-array-index-key": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",

        "i18next/no-literal-string": ["error", {
            markupOnly: true,

            ignoreAttribute: [
                "data-testid",
                "to",
                "target",
                "direction",
                "justify",
                "align",
                "direction",
                "max",
                "border",
                "style",
                "gap",
                "as",
                "feature",
                "role",
                "color",
                "variant",
                "size",
            ],
        }],

        "max-len": ["error", {
            ignoreComments: true,
            code: 130,
        }],

        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "no-use-before-define": "off",
        "no-param-reassign": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-undef": "off",
        "arrow-body-style": "off",

        "malini4-plugin/path-checker": ["error", {
            alias: "@",
        }],

        "malini4-plugin/layer-imports": ["error", {
            alias: "@",
            ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
        }],

        "malini4-plugin/public-api-imports": ["error", {
            alias: "@",
            testFilesPatterns: ["**/*.test.ts", "**/*.test.ts", "**/StoreDecorator.tsx"],
        }],

        "react/jsx-max-props-per-line": ["error", {
            maximum: 4,
        }],

        "react/no-unstable-nested-components": 1,
    },
}, {
    files: ["**/src/**/*.{test,stories}.{ts,tsx}"],

    rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
    },
}];