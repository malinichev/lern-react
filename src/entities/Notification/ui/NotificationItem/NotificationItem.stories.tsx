import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    args: {

    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    item: {
        id: '1',
        title: 'title',
        description: 'description',
        userId: 'userId',
    },
};

export const WithHref = Template.bind({});

WithHref.args = {
    item: {
        id: '1',
        title: 'title WithHref',
        description: 'description WithHref',
        userId: 'userId',
        href: '#',
    },
};
