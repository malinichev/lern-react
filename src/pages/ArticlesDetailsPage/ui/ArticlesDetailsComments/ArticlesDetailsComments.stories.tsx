import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesDetailsComments } from './ArticlesDetailsComments';

const meta = {
    title: 'pages/ArticleDetailsPage/ArticlesDetailsComments',
    component: ArticlesDetailsComments,
} satisfies Meta<typeof ArticlesDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        id: '1',
    },
    decorators: [StoreDecorator({})],
};
