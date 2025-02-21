import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        width: 100,
        height: 100,
    },
};

export const Fallback: Story = {
    args: {
        src: '',
        width: 100,
        height: 100,
    },
};
