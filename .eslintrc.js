module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'malini4-plugin',
        'unused-imports',
    ],
    rules: {
        'no-unused-vars': 0,
        'unused-imports/no-unused-imports': 'error',
        'no-console': 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'react/no-array-index-key': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'target',
                    'direction',
                    'justify',
                    'align',
                    'direction',
                    'max',
                    'border',
                    'style',
                    'gap',
                    'as',
                    'feature',
                    'role',
                    'color',
                    'variant',
                    'size',
                ],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 130 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-use-before-define': 'off',
        'no-param-reassign': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-undef': 'off',
        'arrow-body-style': 'off',
        'malini4-plugin/path-checker': ['error', { alias: '@' }],
        'malini4-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'malini4-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.ts',
                    '**/*.test.ts',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/no-unstable-nested-components': 1,
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories,fixStories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
