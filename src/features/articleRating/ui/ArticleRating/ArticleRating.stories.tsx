import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
} satisfies Meta<typeof ArticleRating>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
Normal.args = {
    articleId: '1',
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'serg',
            },
        },
    }),
];
Normal.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: {
                    name: `ratings`,
                    url: `${__API__}/article-ratings`,
                    method: 'GET',
                    query: {
                        userId: '1',
                        articleId: '1',
                    },
                },
                response: {
                    status: 200,
                    body: [
                        {
                            id: '1',
                            rate: 4,
                            feedback: 'Хорошая статья',
                            userId: '1',
                            articleId: '1',
                        },
                    ],
                },
            },
        ],
    },
};
