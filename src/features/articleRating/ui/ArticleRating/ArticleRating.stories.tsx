import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
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
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    rate: 4,
                    feedback: 'Хорошая статья',
                    userId: '1',
                    articleId: '1',
                },
            ],
        },
    ],
};
