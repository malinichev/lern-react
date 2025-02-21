import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticlesSortField } from '@/entities/Article';

const meta = {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        sort: ArticlesSortField.CREATED,
        order: 'asc',
        onChangeOrder: (newOrder) => {},
        onChangeSort: (newSort) => {},
    },
};
