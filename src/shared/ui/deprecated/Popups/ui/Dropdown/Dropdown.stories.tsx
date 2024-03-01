import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/popups/Dropdown',
    component: Dropdown,
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
            {
                content: 'third',
            },
        ],
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <div
        style={{
            display: 'flex',
            height: '400px',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Dropdown {...args} />
    </div>
);

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
};
