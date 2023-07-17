import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import withMock from 'storybook-addon-mock';
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

export default {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = (args) => (
    <ArticleRecommendationList {...args} />
);

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...mockArticle, id: '1' },
                { ...mockArticle, id: '2' },
                { ...mockArticle, id: '3' },
                { ...mockArticle, id: '4' },
            ],
        },
    ],
};
