import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesDetailsComments } from './ArticlesDetailsComments';

export default {
    title: 'pages/ArticlesDetailsPage/ArticlesDetailsComments',
    component: ArticlesDetailsComments,
} as ComponentMeta<typeof ArticlesDetailsComments>;

const Template: ComponentStory<typeof ArticlesDetailsComments> = (args) => <ArticlesDetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];
Normal.args = {};
