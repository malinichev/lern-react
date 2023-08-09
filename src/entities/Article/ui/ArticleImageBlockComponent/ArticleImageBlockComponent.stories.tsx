import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

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
        src: 'https://avatars.mds.yandex.net/i?id=264d7fccf6aa1da5976a7cace97e50b80c8e5a8b-9266795-images-thumbs&n=13',
    },
};
