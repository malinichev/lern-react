import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesDetailsComments } from './ArticlesDetailsComments';

export default {
    title: 'pages/ArticlesDetailsPage/ArticlesDetailsComments',
    component: ArticlesDetailsComments,
} as ComponentMeta<typeof ArticlesDetailsComments>;

const Template: ComponentStory<typeof ArticlesDetailsComments> = (args) => <ArticlesDetailsComments {...args} />;

export const Normal = Template.bind({});

Normal.args = {};
