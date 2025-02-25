import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleRecommendationList } from './ArticleRecommendationList';

const mockArticle: Article = {
    id: '1',
    title: 'Javascript news СВЕЖАЯ',
    img: '',
    createdAt: '26.04.2022',
    views: 1022,
    subtitle: 'Что нового в JS за 2022 год?',
    user: {
        id: '1',
        username: 'ssss',
    },
    type: [],
    blocks: [],
};

const meta = {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
} satisfies Meta<typeof ArticleRecommendationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [StoreDecorator({})],
    parameters: {
        fetchMock: {
            mocks: [
                {
                    matcher: {
                        name: `articles`,
                        url: `${__API__}/articles`,
                        method: 'GET',
                        query: {
                            _limit: 3,
                        },
                    },
                    response: {
                        status: 200,
                        body: [
                            { ...mockArticle, id: '1' },
                            { ...mockArticle, id: '2' },
                            { ...mockArticle, id: '3' },
                            { ...mockArticle, id: '4' },
                        ],
                    },
                },
            ],
        },
    },
};
