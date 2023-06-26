import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableProfileHeader } from './EditableProfileHeader';

export default {
    title: 'feature/EditableProfileCard/EditableProfileHeader',
    component: EditableProfileHeader,
} as ComponentMeta<typeof EditableProfileHeader>;

const Template: ComponentStory<typeof EditableProfileHeader> = (args) => <EditableProfileHeader {...args} />;

export const Normal = Template.bind({});

Normal.args = {};
