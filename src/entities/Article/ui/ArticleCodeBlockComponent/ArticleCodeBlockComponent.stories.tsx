import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta = {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        block: {
            code: `export default {
    title: 'shared/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,`,
            type: ArticleBlockType.CODE,
            id: '1',
        },
    },
};
