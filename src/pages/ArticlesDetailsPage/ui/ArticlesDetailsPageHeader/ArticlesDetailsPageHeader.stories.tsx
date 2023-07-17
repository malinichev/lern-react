import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesDetailsPageHeader } from './ArticlesDetailsPageHeader';

export default {
    title: 'pages/ArticlesDetailsPage/ArticlesDetailsPageHeader',
    component: ArticlesDetailsPageHeader,
} as ComponentMeta<typeof ArticlesDetailsPageHeader>;

const Template: ComponentStory<typeof ArticlesDetailsPageHeader> = (args) => <ArticlesDetailsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];
Normal.args = {};
