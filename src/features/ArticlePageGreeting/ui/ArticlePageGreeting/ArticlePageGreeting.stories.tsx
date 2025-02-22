import type { Meta, StoryObj } from '@storybook/react';

import { ArticlePageGreeting } from './ArticlePageGreeting';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/ArticlePageGreeting',
    component: ArticlePageGreeting,
    decorators: [
        StoreDecorator({
            user: {
                authData: { jsonSettings: { isArticlePageWasOpened: false } },
            },
        }),
    ],
} satisfies Meta<typeof ArticlePageGreeting>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
