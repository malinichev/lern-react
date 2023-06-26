import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleInfinityList } from './ArticleInfinityList';

export default {
    title: 'pages/Article/ArticleInfinityList',
    component: ArticleInfinityList,
} as ComponentMeta<typeof ArticleInfinityList>;

const Template: ComponentStory<typeof ArticleInfinityList> = (args) => <ArticleInfinityList {...args} />;

export const Normal = Template.bind({});

Normal.args = {};
