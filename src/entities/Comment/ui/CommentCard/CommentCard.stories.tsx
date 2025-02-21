import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
    comment: {
        id: '1',
        text: 'Hellow!',
        user: { id: '1', username: 'Vasyia' },
    },
};

export const Normal: Story = {
    args,
};

export const NormalRedesign: Story = {
    args,
};
NormalRedesign.decorators = [NewDesignDecorator];

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const LoadingRedesign: Story = {};

LoadingRedesign.args = {
    isLoading: true,
};
LoadingRedesign.decorators = [NewDesignDecorator];
