import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description:
                        'Поставь лайк и оставь комментарий под Ulbi TV',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description:
                        'Поставь лайк и оставь комментарий под Ulbi TV',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description:
                        'Поставь лайк и оставь комментарий под Ulbi TV',
                },
            ],
        },
    ],
};
