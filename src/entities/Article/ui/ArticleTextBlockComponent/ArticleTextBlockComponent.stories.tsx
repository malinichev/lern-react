import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

const meta = {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        block: {
            title: 'title',
            paragraphs: ['paragraphs', 'paragraphs'],
            type: ArticleBlockType.TEXT,
            id: '1',
        },
    },
};
