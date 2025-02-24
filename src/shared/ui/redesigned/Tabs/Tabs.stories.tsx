import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Tabs } from './Tabs';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        tabs: [
            { value: 'tab1', content: 'Tab 1' },
            { value: 'tab2', content: 'Tab 2' },
            { value: 'tab3', content: 'Tab 3' },
        ],
        value: 'tab2',
        onTabClick: fn(),
    },
};
