import { StateSchema } from '@/app/providers/StoreProvider';
import { Country, Currency } from '@/shared/const/common';

import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
