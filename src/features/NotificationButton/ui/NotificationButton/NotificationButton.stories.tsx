import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import type { Notification } from '@/entities/Notification';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationButton } from './NotificationButton';

const mockNotification: Notification = {
    id: '1',
    title: 'title WithHref',
    description: 'description WithHref',
    userId: 'userId',
};

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            delay: 1000,
            response: [
                { ...mockNotification, id: '1' },
                { ...mockNotification, id: '2' },
                { ...mockNotification, id: '3' },
                { ...mockNotification, id: '4', href: '#' },
            ],
        },
    ],
};
