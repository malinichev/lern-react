import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-onboarding',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        'storybook-addon-fetch-mock',
        '@storybook/addon-webpack5-compiler-babel',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    // core: {
    //     builder: 'webpack5',
    // },
    webpackFinal: async (config: Configuration) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        // @ts-ignore
        config!.module!.rules = config!.module!.rules!.map(
            // @ts-ignore
            (rule: RuleSetRule) => {
                if (/svg/.test((rule?.test ?? '') as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            },
        );

        config!.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config!.module!.rules.push(buildCssLoader(true));

        config!.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        // Добавляем поддержку SCSS
        // config.module?.rules?.push({
        //     test: /\.s[ac]ss$/i,
        //     use: [
        //         'style-loader',
        //         {
        //             loader: 'css-loader',
        //             options: {
        //                 modules: {
        //                     auto: true,
        //                     localIdentName: '[name]__[local]--[hash:base64:5]',
        //                 },
        //             },
        //         },
        //         'sass-loader',
        //     ],
        // });

        // Return the altered config
        return config;
    },

    docs: {},

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;
