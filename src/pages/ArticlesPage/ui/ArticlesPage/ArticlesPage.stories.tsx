import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    args: { isTest: true },
    decorators: [
        StoreDecorator({
            user: {
                authData: { jsonSettings: { isArticlePageWasOpened: true } },
            },
            articlesPage: { _inited: true, hasMore: false, isLoading: false },
        }),
    ],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
