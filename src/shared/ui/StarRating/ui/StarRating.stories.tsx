import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Normal = Template.bind({});

Normal.args = {};

export const BigSize = Template.bind({});

BigSize.args = {
    size: 60,
};

export const Selected2 = Template.bind({});

Selected2.args = {
    selectedStar: 2,
};

export const SelectedAll = Template.bind({});

SelectedAll.args = {
    selectedStar: 5,
};
