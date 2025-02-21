import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    args: {
        onSuccess: () => {},
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            login: {
                userName: 'admin',
                password: '123',
            },
        }),
    ],
};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            login: {
                userName: 'admin',
                password: '123',
                error: '1234',
            },
        }),
    ],
};

export const IsLoading: Story = {
    decorators: [
        StoreDecorator({
            login: {
                userName: 'admin',
                password: '123',
                isLoading: true,
            },
        }),
    ],
};
