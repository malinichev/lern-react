import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesDetailsPage from './ArticlesDetailsPage';

export default {
    title: 'pages/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesDetailsPage>;

// @ts-ignore
const Template: ComponentStory<typeof ArticlesDetailsPage> = () => <ArticlesDetailsPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
