import { type Meta, type StoryObj } from '@storybook/react';

import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const meta: Meta<typeof ArticleImageBlockComponent> = {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Normal: Story = {
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.IMAGE,
            title: 'ArticleImageBlockComponent',
            src: 'https://avatars.mds.yandex.net/i?id=264d7fccf6aa1da5976a7cace97e50b80c8e5a8b-9266795-images-thumbs&n=13',
        },
    },
};
