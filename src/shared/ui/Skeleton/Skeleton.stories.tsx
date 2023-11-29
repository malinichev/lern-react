import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    height: 200,
    width: '100%',
};

export const Circle = Template.bind({});

Circle.args = {
    height: 100,
    width: 100,
    border: '50%',
};

export const NormalDark = Template.bind({});

NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
NormalDark.args = {
    height: 200,
    width: '100%',
};

export const CircleDark = Template.bind({});
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
CircleDark.args = {
    height: 100,
    width: 100,
    border: '50%',
};
