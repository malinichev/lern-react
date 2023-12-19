import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

const Children = () => (
    <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
        <p style={{ backgroundColor: 'blueviolet', color: 'white' }}>first</p>
        <p>second</p>
        <p>third</p>
    </div>
);

export default {
    title: 'shared/popups/Popover',
    component: Popover,
    args: {
        trigger: <Button>Open</Button>,
        children: <Children />,

    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <div style={{
        display: 'flex', height: '400px', justifyContent: 'center', alignItems: 'center',
    }}
    >
        <Popover {...args} />
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
