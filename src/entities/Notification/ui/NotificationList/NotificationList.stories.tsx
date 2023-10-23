import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';

const mockNotification: Notification = {
    id: '1',
    title: 'title WithHref',
    description: 'description WithHref',
    userId: 'userId',
};

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
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
