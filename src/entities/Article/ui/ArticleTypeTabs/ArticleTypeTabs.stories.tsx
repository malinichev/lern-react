import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'shared/ArticleTypeTabs',
    component: ArticleTypeTabs,
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});

Normal.args = {};
