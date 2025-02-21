import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileHeader } from './EditableProfileHeader';

const meta = {
    title: 'features/EditableProfileCard/EditableProfileHeader',
    component: EditableProfileHeader,
} satisfies Meta<typeof EditableProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
Normal.decorators = [StoreDecorator({})];
