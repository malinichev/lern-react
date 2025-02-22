import type { Meta, StoryObj } from '@storybook/react';

import { ArticlePageGreeting } from './ArticlePageGreeting';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { JsonSettings } from '@/entities/User';

const mockJsonSettings: JsonSettings = {};
const userId = '1';
const meta = {
    title: 'features/ArticlePageGreeting',
    component: ArticlePageGreeting,
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: userId,
                    jsonSettings: { isArticlePageWasOpened: false },
                },
            },
        }),
    ],
} satisfies Meta<typeof ArticlePageGreeting>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    parameters: {
        fetchMock: {
            mocks: [
                {
                    matcher: {
                        name: `JsonSettings`,
                        url: `${__API__}/users/${userId}`,
                        method: 'PATCH',
                    },
                    response: {
                        status: 200,
                        body: { jsonSettings: mockJsonSettings },
                    },
                },
            ],
        },
    },
};
