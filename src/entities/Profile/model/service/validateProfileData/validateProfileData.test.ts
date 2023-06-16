import { Country, Currency } from 'shared/const/common';
import { ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    firstname: 'Sergey',
    lastname: 'Malinichev',
    age: 39,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Irk',
    username: 'malin',

};

describe('validateProfileData.test', () => {
    test('success login', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('error fistname and lastname', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('error Age', async () => {
        const result = validateProfileData({
            ...data, age: undefined,
        });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_AGE]);
    });
    test('error COUNTRY', async () => {
        const result = validateProfileData({
            ...data, country: undefined,
        });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_COUNTRY]);
    });

    test('error all', async () => {
        const result = validateProfileData({
            ...data, firstname: '', lastname: '', age: 0, country: undefined,
        });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA, ValidateProfileErrors.INCORRECT_USER_AGE, ValidateProfileErrors.INCORRECT_USER_COUNTRY]);
    });
});
