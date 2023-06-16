import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    block: {
        title: 'title',
        paragraphs: ['paragraphs', 'paragraphs'],
        type: ArticleBlockType.TEXT,
        id: '1',
    },
};
