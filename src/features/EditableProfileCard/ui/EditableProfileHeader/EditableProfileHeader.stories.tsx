import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileHeader } from './EditableProfileHeader';

export default {
    title: 'features/EditableProfileCard/EditableProfileHeader',
    component: EditableProfileHeader,
} as ComponentMeta<typeof EditableProfileHeader>;

const Template: ComponentStory<typeof EditableProfileHeader> = (args) => <EditableProfileHeader {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];
Normal.args = {};
