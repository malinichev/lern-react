import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationList } from './ArticleRecommendationList';

export default {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = (args) => <ArticleRecommendationList {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({
    api: {
        queries: {
            'getArticleRecommendationsList(3)': {
                data: [
                    {
                        id: '1',
                        title: 'Javascript news СВЕЖАЯ',
                        subtitle: 'Что нового в JS за 2022 год?',
                        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                        views: 1022,
                        createdAt: '26.04.2022',
                        userId: '1',
                    },
                ],
            },
        },
    },
})];
Normal.args = {

};
