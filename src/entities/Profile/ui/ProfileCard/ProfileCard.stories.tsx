import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country, Currency } from '../../../../shared/const/common';
import { ProfileCard } from './ProfileCard';
import avatar from '../../../../shared/assets/avatar.jpeg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        firstname: 'Sergey',
        lastname: 'Malinichev',
        age: 39,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Irk',
        username: 'malin',
        avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'Ошибка',
};
