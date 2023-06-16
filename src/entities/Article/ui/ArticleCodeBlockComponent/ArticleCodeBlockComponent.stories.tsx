import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    block: {
        code: `export default {
    title: 'shared/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,`,
        type: ArticleBlockType.CODE,
        id: '1',
    },
};
