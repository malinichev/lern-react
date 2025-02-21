import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesDetailsPageHeader } from './ArticlesDetailsPageHeader';

const meta = {
    title: 'pages/ArticlesDetailsPage/ArticlesDetailsPageHeader',
    component: ArticlesDetailsPageHeader,
} satisfies Meta<typeof ArticlesDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [StoreDecorator({})],
};
