import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    onTabClick: action('onTabClick'),
    value: 'tab2',
    tabs: [
        {
            value: 'tab1',
            content: 'tab 1',
        },
        {
            value: 'tab2',
            content: 'tab 2',
        },
        {
            value: 'tab3',
            content: 'tab 3',
        },
    ],
};
