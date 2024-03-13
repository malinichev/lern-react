import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/shared/const/common';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'Admin',
    lastname: 'Admin',
    age: 465,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin213',
};

const options = {
    initialState: {
        profile: {
            readOnly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'Admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

// Mock the matchMedia function
window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === '(max-width: 768px)',
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
}));

describe('feutures/EditableProfileCard', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Режим reedOnly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('Режим reedOnly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname'),
            'user',
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.CancelButton'),
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'Admin',
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Admin');
    });

    test('Должна появится ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.SaveButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });

    test('Если нет ошибок то запрос PUT отправится на сервер', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname'),
            'user',
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.SaveButton'),
        );
        expect(mockPutReq).toHaveBeenCalled();
    });
});
