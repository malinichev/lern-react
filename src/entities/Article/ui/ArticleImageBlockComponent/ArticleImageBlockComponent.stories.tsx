import { type Meta, type StoryObj } from '@storybook/react';

import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import img from '../../../../shared/assets/relax-meditation.jpg';

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
            src: img,
        },
    },
};
