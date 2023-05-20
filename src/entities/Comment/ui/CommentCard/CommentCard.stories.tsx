import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
    comment: {
        id: '1',
        text: 'Hellow!',
        user: { id: '1', username: 'Vasyia' },
    },
};

export const Loading = Template.bind({});

Loading.args = {
    isLoading: true,
};
