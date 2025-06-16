import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import js from '@/shared/assets/js.jpg'

export default {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    block: {
        id: '1',
        type: ArticleBlockType.IMAGE,
        title: 'ArticleImageBlockComponent',
        src: js,
    },
};
