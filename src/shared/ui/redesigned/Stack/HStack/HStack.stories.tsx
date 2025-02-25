import type { Meta, StoryObj } from '@storybook/react';
import { HStack } from './HStack';

const meta = {
    title: 'shared/Stack/HStack',
    component: HStack,
} satisfies Meta<typeof HStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const Gap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const Gap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const Gap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};
