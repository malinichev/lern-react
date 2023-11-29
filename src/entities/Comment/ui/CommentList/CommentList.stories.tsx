import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Hellow!',
            user: { id: '1', username: 'Vasyia' },
        },
        {
            id: '2',
            text: 'World!',
            user: { id: '2', username: 'Petyia' },
        },
    ],
};
Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});

Loading.args = {
    isLoading: true,
};
