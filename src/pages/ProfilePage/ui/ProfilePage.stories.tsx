import type { Meta, StoryObj } from '@storybook/react';

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

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [
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
    ],
    parameters: {
        fetchMock: {
            mocks: [
                {
                    matcher: {
                        name: `articlesRating`,
                        url: `${__API__}/profile-ratings`,
                        method: 'GET',
                        query: {
                            userId,
                            profileId: '',
                        },
                    },
                    response: {
                        status: 200,
                        body: [
                            {
                                id: '1',
                                rate: 2,
                                feedback: 'Хороший профиль',
                                userId,
                                profileId,
                            },
                        ],
                    },
                },
            ],
        },
    },
};

export const Dark: Story = {
    decorators: [
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
    ],
    parameters: {
        fetchMock: {
            mocks: [
                {
                    matcher: {
                        name: `articlesRating`,
                        url: `${__API__}/profile-ratings`,
                        method: 'GET',
                        query: {
                            userId,
                            profileId: '',
                        },
                    },
                    response: {
                        status: 200,
                        body: [
                            {
                                id: '1',
                                rate: 2,
                                feedback: 'Хороший профиль',
                                userId,
                                profileId,
                            },
                        ],
                    },
                },
            ],
        },
    },
};
