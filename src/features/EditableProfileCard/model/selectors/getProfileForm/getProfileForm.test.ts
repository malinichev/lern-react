import { StateSchema } from '@/app/providers/StoreProvider';
import { Country, Currency } from '@/shared/const/common';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const form = {
            firstname: 'Sergey',
            lastname: 'Malinichev',
            age: 39,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Irk',
            username: 'malin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
