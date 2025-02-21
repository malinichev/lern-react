import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StartStart: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
        justify: 'start',
        align: 'start',
        direction: 'row',
    },
};

export const StartCenter: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
        justify: 'start',
        align: 'center',
        direction: 'row',
    },
};

export const CenterCenter: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
        justify: 'center',
        align: 'center',
        direction: 'row',
    },
};

export const EndCenter: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
        justify: 'end',
        align: 'center',
        direction: 'row',
    },
};

export const EndEnd: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
        justify: 'end',
        align: 'end',
        direction: 'row',
    },
};
