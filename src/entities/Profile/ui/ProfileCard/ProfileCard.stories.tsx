import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/avatar.jpeg';
import { ProfileCard } from './ProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'Malinich',
        firstname: 'asd',
        city: 'asf',
        currency: Currency.USD,
        avatar,
    },
};

export const Primary = Template.bind({});
Primary.args = args;

export const PrimaryRedesign = Template.bind({});
PrimaryRedesign.args = args;
PrimaryRedesign.decorators = [NewDesignDecorator];

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
