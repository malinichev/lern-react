import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    args: {
        title: 'Заголовок',
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Normal = Template.bind({});

Normal.args = {};

export const SelectedStar = Template.bind({});

SelectedStar.args = {
    rate: 4,
};

export const WithModal = Template.bind({});

WithModal.args = {
    hasFeedback: true,
    feedbackTitle: 'feedbackTitle',
};
