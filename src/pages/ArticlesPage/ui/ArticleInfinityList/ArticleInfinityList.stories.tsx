import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleInfinityList } from './ArticleInfinityList';

const meta = {
    title: 'pages/ArticleInfinityList',
    component: ArticleInfinityList,
} satisfies Meta<typeof ArticleInfinityList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
