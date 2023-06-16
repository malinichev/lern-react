import { StateSchema } from 'app/providers/StoreProvider';

import { ValidateProfileErrors } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return SERVER_ERROR', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileErrors.SERVER_ERROR],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.SERVER_ERROR]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
