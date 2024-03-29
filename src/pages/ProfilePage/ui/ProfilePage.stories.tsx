import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from '../../../shared/const/common';

import avatar from '../../../shared/assets/avatar.jpeg';
// eslint-disable-next-line malini4-plugin/public-api-imports
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { Theme } from '@/shared/const/theme';

const userId = '1';
const profileId = '2';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
    StoreDecorator(
        {
            profile: {
                form: {
                    id: userId,
                    firstname: 'Sergey',
                    lastname: 'Malinichev',
                    age: 39,
                    currency: Currency.RUB,
                    country: Country.Russia,
                    city: 'Irk',
                    username: 'malin',
                    avatar,
                },
            },
            user: {
                authData: {
                    id: userId,
                    username: 'serg',
                },
            },
        },
        {
            profile: profileReducer,
        },
    ),
];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=${userId}&profileId= `,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    rate: 2,
                    feedback: 'Хороший профиль',
                    userId,
                    profileId,
                },
            ],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
        {
            profile: {
                form: {
                    id: userId,
                    firstname: 'Sergey',
                    lastname: 'Malinichev',
                    age: 39,
                    currency: Currency.RUB,
                    country: Country.Russia,
                    city: 'Irk',
                    username: 'malin',
                    avatar,
                },
            },
            user: {
                authData: {
                    id: userId,
                    username: 'serg',
                },
            },
        },
        {
            profile: profileReducer,
        },
    ),
];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=${userId}&profileId= `,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    rate: 4,
                    feedback: 'Хороший профиль',
                    userId,
                    profileId,
                },
            ],
        },
    ],
};
