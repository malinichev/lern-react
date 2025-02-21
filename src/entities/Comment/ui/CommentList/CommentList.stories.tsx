import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
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
    },
    decorators: [StoreDecorator({})],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
