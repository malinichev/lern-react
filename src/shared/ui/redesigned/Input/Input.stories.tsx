import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: 'Some text',
    },
};

export const WithLabel: Story = {
    args: {
        placeholder: 'Type text',
        value: 'Some text',
        label: 'Label text',
    },
};
