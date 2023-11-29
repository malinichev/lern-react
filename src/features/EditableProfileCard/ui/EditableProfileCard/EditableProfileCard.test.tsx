import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/shared/const/common';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

const profile:Profile = {
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

describe('feutures/EditableProfileCard', () => {
    test('Режим reedOnly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileHeader.CancelButton')).toBeInTheDocument();
    });

    test('Режим reedOnly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Admin');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Admin');
    });

    test('Должна появится ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));
        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок то запрос PUT отправится на сервер', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');
        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'));
        expect(mockPutReq).toHaveBeenCalled();
    });
});
