import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const args = {
    comment: {
        id: '1',
        text: 'Hellow!',
        user: { id: '1', username: 'Vasyia' },
    },
};

export const Normal = Template.bind({});

Normal.args = args;

export const NormalRedesign = Template.bind({});

NormalRedesign.args = args;
NormalRedesign.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});

Loading.args = {
    isLoading: true,
};

export const LoadingRedesign = Template.bind({});

LoadingRedesign.args = {
    isLoading: true,
};
LoadingRedesign.decorators = [NewDesignDecorator];
