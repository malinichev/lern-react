import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from 'entities/User';
import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
            },
        },
    }),
];
Normal.args = {};

export const WithAdminPanel = Template.bind({});
WithAdminPanel.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                roles: [UserRole.ADMIN],
                avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
            },
        },
    }),
];
WithAdminPanel.args = {};
