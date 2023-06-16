import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from '../../../shared/const/common';
import { profileReducer } from '../../../entities/Profile';
import avatar from '../../../shared/assets/avatar.jpeg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({
    profile: {
        form: {
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
}, {
    profile: profileReducer,
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
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
}, {
    profile: profileReducer,
})];
